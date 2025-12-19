import jsPDF from "jspdf";

interface ResourcePdfOptions {
  name: string;
  category: string;
  content: string;
}

// Load image and convert to base64, also return dimensions for aspect ratio
interface ImageData {
  base64: string;
  width: number;
  height: number;
  aspectRatio: number;
}

async function loadImageAsBase64(url: string): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      ctx.drawImage(img, 0, 0);
      resolve({
        base64: canvas.toDataURL("image/png"),
        width: img.width,
        height: img.height,
        aspectRatio: img.width / img.height,
      });
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = url;
  });
}

// Parse HTML and extract structured content
interface ContentLine {
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "p" | "li" | "quote" | "hr";
  indent: number;
}

function parseHtmlContent(html: string): ContentLine[] {
  const lines: ContentLine[] = [];
  const div = document.createElement("div");
  div.innerHTML = html;

  function getText(el: Element): string {
    return el.textContent?.trim() || "";
  }

  function processElement(el: Element): void {
    const tag = el.tagName.toLowerCase();

    switch (tag) {
      case "h1":
        lines.push({ text: getText(el), type: "h1", indent: 0 });
        break;
      case "h2":
        lines.push({ text: getText(el), type: "h2", indent: 0 });
        break;
      case "h3":
        lines.push({ text: getText(el), type: "h3", indent: 0 });
        break;
      case "h4":
        lines.push({ text: getText(el), type: "h4", indent: 0 });
        break;
      case "p":
        const pText = getText(el);
        if (pText) {
          lines.push({ text: pText, type: "p", indent: 0 });
        }
        break;
      case "ul":
        el.querySelectorAll(":scope > li").forEach((li) => {
          lines.push({ text: "• " + getText(li), type: "li", indent: 1 });
        });
        break;
      case "ol":
        let olCounter = 1;
        el.querySelectorAll(":scope > li").forEach((li) => {
          const prefix = el.getAttribute("type") === "a"
            ? String.fromCharCode(96 + olCounter) + ")"
            : olCounter + ".";
          lines.push({ text: prefix + " " + getText(li), type: "li", indent: 1 });
          olCounter++;
        });
        break;
      case "blockquote":
        lines.push({ text: getText(el), type: "quote", indent: 1 });
        break;
      case "hr":
        lines.push({ text: "", type: "hr", indent: 0 });
        break;
      case "br":
        // Skip line breaks
        break;
      default:
        // Process children
        el.childNodes.forEach((child) => {
          if (child.nodeType === Node.ELEMENT_NODE) {
            processElement(child as Element);
          }
        });
    }
  }

  div.childNodes.forEach((child) => {
    if (child.nodeType === Node.ELEMENT_NODE) {
      processElement(child as Element);
    }
  });

  return lines;
}

export async function generateResourcePdf(options: ResourcePdfOptions): Promise<void> {
  const { name, category, content } = options;

  // Load the logo image
  let logoData: ImageData | null = null;
  try {
    logoData = await loadImageAsBase64("/images/jamun-blue-side-logo.webp");
  } catch (error) {
    console.warn("Could not load logo, using text fallback:", error);
  }

  // Create PDF with A4 dimensions
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const brandBlue = [73, 123, 206] as [number, number, number];
  const darkText = [26, 26, 46] as [number, number, number];
  const grayText = [100, 116, 139] as [number, number, number];
  const lightGray = [226, 232, 240] as [number, number, number];

  // Logo dimensions - calculate based on actual aspect ratio
  const headerLogoHeight = 8; // mm - desired height for header
  const headerLogoWidth = logoData ? headerLogoHeight * logoData.aspectRatio : 30;
  const footerLogoHeight = 5; // mm - desired height for footer
  const footerLogoWidth = logoData ? footerLogoHeight * logoData.aspectRatio : 20;

  let yPosition = margin;
  let pageNumber = 1;

  // Helper to add header to each page
  function addHeader(): void {
    // Header line
    pdf.setDrawColor(...brandBlue);
    pdf.setLineWidth(0.5);
    pdf.line(margin, 18, pageWidth - margin, 18);

    // Add logo or fallback text
    if (logoData) {
      try {
        pdf.addImage(logoData.base64, "PNG", margin, 6, headerLogoWidth, headerLogoHeight);
      } catch {
        // Fallback to text if image fails
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(10);
        pdf.setTextColor(...brandBlue);
        pdf.text("JAMUN", margin, 14);
      }
    } else {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10);
      pdf.setTextColor(...brandBlue);
      pdf.text("JAMUN", margin, 14);
    }

    // Category on right side
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(...grayText);
    pdf.text(category, pageWidth - margin, 14, { align: "right" });
  }

  // Helper to add footer to each page
  function addFooter(): void {
    const footerY = pageHeight - 10;

    // Footer line
    pdf.setDrawColor(...lightGray);
    pdf.setLineWidth(0.3);
    pdf.line(margin, footerY - 5, pageWidth - margin, footerY - 5);

    // Add small logo or text in footer
    if (logoData) {
      try {
        pdf.addImage(logoData.base64, "PNG", margin, footerY - 4, footerLogoWidth, footerLogoHeight);
      } catch {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(8);
        pdf.setTextColor(...grayText);
        pdf.text("JAMUN Model UN Resources", margin, footerY);
      }
    } else {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(...grayText);
      pdf.text("JAMUN Model UN Resources", margin, footerY);
    }

    // Page number on right
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(...grayText);
    pdf.text(`Page ${pageNumber}`, pageWidth - margin, footerY, { align: "right" });
  }

  // Helper to check if we need a new page
  function checkNewPage(neededHeight: number): void {
    if (yPosition + neededHeight > pageHeight - 20) {
      addFooter();
      pdf.addPage();
      pageNumber++;
      yPosition = margin + 12;
      addHeader();
    }
  }

  // Helper to add wrapped text
  function addWrappedText(
    text: string,
    fontSize: number,
    fontStyle: "normal" | "bold" | "italic",
    color: [number, number, number],
    indent: number = 0,
    lineHeight: number = 1.4
  ): void {
    pdf.setFont("helvetica", fontStyle);
    pdf.setFontSize(fontSize);
    pdf.setTextColor(...color);

    const effectiveWidth = contentWidth - indent * 5;
    const lines = pdf.splitTextToSize(text, effectiveWidth);
    const lineHeightMm = fontSize * 0.35 * lineHeight;

    lines.forEach((line: string) => {
      checkNewPage(lineHeightMm + 2);
      pdf.text(line, margin + indent * 5, yPosition);
      yPosition += lineHeightMm;
    });
  }

  // Add first page header
  addHeader();
  yPosition = 28;

  // Title
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(24);
  pdf.setTextColor(...darkText);
  const titleLines = pdf.splitTextToSize(name, contentWidth);
  titleLines.forEach((line: string) => {
    pdf.text(line, margin, yPosition);
    yPosition += 10;
  });

  // Category badge
  yPosition += 2;
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10);
  pdf.setTextColor(...brandBlue);
  pdf.text(category.toUpperCase(), margin, yPosition);

  // Divider line under title
  yPosition += 8;
  pdf.setDrawColor(...brandBlue);
  pdf.setLineWidth(1);
  pdf.line(margin, yPosition, margin + 40, yPosition);
  yPosition += 15;

  // Parse and render content
  const contentLines = parseHtmlContent(content);

  contentLines.forEach((line) => {
    switch (line.type) {
      case "h1":
        yPosition += 8;
        checkNewPage(15);
        addWrappedText(line.text, 18, "bold", darkText);
        yPosition += 4;
        // Add underline for h1
        pdf.setDrawColor(...lightGray);
        pdf.setLineWidth(0.3);
        pdf.line(margin, yPosition - 2, pageWidth - margin, yPosition - 2);
        yPosition += 4;
        break;

      case "h2":
        yPosition += 10;
        checkNewPage(12);
        addWrappedText(line.text, 14, "bold", darkText);
        yPosition += 3;
        break;

      case "h3":
        yPosition += 6;
        checkNewPage(10);
        addWrappedText(line.text, 12, "bold", darkText);
        yPosition += 2;
        break;

      case "h4":
        yPosition += 4;
        checkNewPage(8);
        addWrappedText(line.text, 11, "bold", grayText);
        yPosition += 2;
        break;

      case "p":
        checkNewPage(8);
        addWrappedText(line.text, 10, "normal", grayText, 0, 1.5);
        yPosition += 4;
        break;

      case "li":
        checkNewPage(6);
        addWrappedText(line.text, 10, "normal", grayText, 1, 1.4);
        yPosition += 1;
        break;

      case "quote":
        yPosition += 4;
        checkNewPage(12);
        // Draw quote background
        const quoteLines = pdf.splitTextToSize(line.text, contentWidth - 15);
        const quoteHeight = quoteLines.length * 5 + 8;
        pdf.setFillColor(248, 250, 252);
        pdf.setDrawColor(...brandBlue);
        pdf.rect(margin, yPosition - 3, contentWidth, quoteHeight, "F");
        pdf.setLineWidth(0.8);
        pdf.line(margin, yPosition - 3, margin, yPosition - 3 + quoteHeight);

        pdf.setFont("helvetica", "italic");
        pdf.setFontSize(10);
        pdf.setTextColor(...grayText);
        quoteLines.forEach((qLine: string) => {
          pdf.text(qLine, margin + 5, yPosition + 2);
          yPosition += 5;
        });
        yPosition += 6;
        break;

      case "hr":
        yPosition += 8;
        checkNewPage(5);
        pdf.setDrawColor(...lightGray);
        pdf.setLineWidth(0.3);
        pdf.line(margin, yPosition, pageWidth - margin, yPosition);
        yPosition += 8;
        break;
    }
  });

  // Add footer to last page
  addFooter();

  // Open PDF in new tab instead of auto-downloading
  const pdfBlob = pdf.output("blob");
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, "_blank");
}
