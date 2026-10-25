import { jsPDF } from 'jspdf';

/**
 * Generates and downloads a clean, professional PDF report of the user's MBTI result.
 * Designed with elegant typography, clear section layouts, spectrum visual bars, and multi-page safety.
 *
 * @param {Object} result - The scoring result object containing type, dimensions, calculatedAt
 * @param {Object} profile - Full personality type data from personalityTypes.js
 */
export function exportMbtiPdf(result, profile) {
  if (!result || !profile) return;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 18;
  const contentWidth = pageWidth - (marginX * 2);
  let currentY = 18;

  // Helper to ensure page bounds
  const checkPageBreak = (neededHeight = 20) => {
    if (currentY + neededHeight > pageHeight - 20) {
      doc.addPage();
      currentY = 20;
      drawPageBorder();
    }
  };

  const drawPageBorder = () => {
    // Subtle top accent bar
    doc.setFillColor(79, 70, 229); // Indigo 600
    doc.rect(0, 0, pageWidth, 4, 'F');
  };

  // Draw initial page border
  drawPageBorder();

  // --- HEADER SECTION ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(99, 102, 241); // Indigo 500
  doc.text('SIAPASIH? • LAPORAN LENGKAP HASIL TES KEPRIBADIAN MBTI (100 SOAL)', marginX, currentY);
  currentY += 5;

  const formattedDate = new Date(result.calculatedAt || Date.now()).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139); // Slate 500
  doc.text(`Tanggal Pengerjaan: ${formattedDate}  |  Status: 100 / 100 Pertanyaan Lengkap  |  Platform: SiapaSih? Web`, marginX, currentY);
  currentY += 4;

  // Divider line
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(marginX, currentY, pageWidth - marginX, currentY);
  currentY += 8;

  // --- HERO PROFILE BOX ---
  // Background card for personality summary
  const heroBoxY = currentY;
  doc.setFillColor(248, 250, 252); // Slate 50
  doc.setDrawColor(203, 213, 225); // Slate 300
  doc.roundedRect(marginX, heroBoxY, contentWidth, 34, 3, 3, 'FD');

  // Badge category
  doc.setFillColor(238, 242, 255); // Indigo 50
  doc.setDrawColor(199, 210, 254); // Indigo 200
  doc.roundedRect(marginX + 5, heroBoxY + 5, 45, 6, 1.5, 1.5, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(67, 56, 202); // Indigo 700
  doc.text(profile.groupName || profile.category || 'MBTI PROFILE', marginX + 7, heroBoxY + 9.2);

  // Big Personality Type Code
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(15, 23, 42); // Slate 900
  doc.text(profile.code, marginX + 5, heroBoxY + 20);

  // Title Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(79, 70, 229); // Indigo 600
  doc.text(`—  ${profile.name}`, marginX + 38, heroBoxY + 18.5);

  // Tagline
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105); // Slate 600
  const taglineLines = doc.splitTextToSize(`"${profile.tagline}"`, contentWidth - 10);
  doc.text(taglineLines, marginX + 5, heroBoxY + 27);

  currentY = heroBoxY + 39;

  // --- SECTION: GAMBARAN KARAKTER MENDALAM ---
  checkPageBreak(30);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59); // Slate 800
  doc.text('1. GAMBARAN KARAKTER & KECENDERUNGAN ALAMI', marginX, currentY);
  currentY += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85); // Slate 700

  // If there's an expanded description or standard description
  const fullDescription = profile.expandedDescription || profile.description;
  const descParagraphs = Array.isArray(fullDescription) ? fullDescription : [fullDescription];
  
  descParagraphs.forEach((p) => {
    checkPageBreak(15);
    const splitDesc = doc.splitTextToSize(p, contentWidth);
    doc.text(splitDesc, marginX, currentY);
    currentY += splitDesc.length * 4.2 + 2;
  });

  currentY += 3;

  // --- SECTION: DISTRIBUSI 4 DIMENSI PREFERENSI (SPEKTRUM BARS) ---
  checkPageBreak(50);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('2. DISTRIBUSI SPEKTRUM EMPAT DIMENSI JUNG-BRIGGS', marginX, currentY);
  currentY += 4.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Skor dihitung dari akumulasi 100 jawaban pilihan tunggal (skor bulat 100% per sumbu).', marginX, currentY);
  currentY += 5;

  const dims = [
    { key: 'EI', title: 'Orientasi Energi', data: result.dimensions?.EI },
    { key: 'SN', title: 'Pemrosesan Informasi', data: result.dimensions?.SN },
    { key: 'TF', title: 'Pengambilan Keputusan', data: result.dimensions?.TF },
    { key: 'JP', title: 'Pola Hidup & Struktur', data: result.dimensions?.JP }
  ];

  dims.forEach((d) => {
    if (!d.data) return;
    checkPageBreak(12);

    const poleA = d.data.poleA;
    const poleB = d.data.poleB;
    const barWidth = contentWidth - 30; // 148mm
    const barHeight = 4.5;
    const barX = marginX + 15;

    // Dim title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${d.title}:`, marginX, currentY + 3.5);

    // Labels left and right
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(poleA.percent >= poleB.percent ? 79 : 100, poleA.percent >= poleB.percent ? 70 : 116, poleA.percent >= poleB.percent ? 229 : 139);
    doc.text(`${poleA.label} (${poleA.percent}%)`, barX - 1, currentY - 1, { align: 'left' });

    doc.setTextColor(poleB.percent >= poleA.percent ? 79 : 100, poleB.percent >= poleA.percent ? 70 : 116, poleB.percent >= poleA.percent ? 229 : 139);
    doc.text(`${poleB.label} (${poleB.percent}%)`, barX + barWidth + 1, currentY - 1, { align: 'right' });

    // Background bar
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(barX, currentY, barWidth, barHeight, 2, 2, 'F');

    // Left fill
    const leftWidth = (poleA.percent / 100) * barWidth;
    if (leftWidth > 0) {
      doc.setFillColor(poleA.percent >= 50 ? 99 : 148, poleA.percent >= 50 ? 102 : 163, poleA.percent >= 50 ? 241 : 184);
      doc.roundedRect(barX, currentY, leftWidth, barHeight, 2, 2, 'F');
    }

    currentY += 10.5;
  });

  currentY += 3;

  // --- SECTION: KEKUATAN & AREA PENGEMBANGAN DIRI ---
  checkPageBreak(40);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('3. KEKUATAN UTAMA (SUPERPOWER)', marginX, currentY);
  currentY += 5;

  profile.strengths?.forEach((str) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(16, 185, 129); // Emerald 500
    doc.text('✓', marginX, currentY);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const splitStr = doc.splitTextToSize(str, contentWidth - 6);
    doc.text(splitStr, marginX + 5, currentY);
    currentY += splitStr.length * 4.2 + 1.5;
  });

  currentY += 4;

  checkPageBreak(40);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('4. AREA PENGEMBANGAN DIRI (TANTANGAN ALAMI)', marginX, currentY);
  currentY += 5;

  profile.growthAreas?.forEach((ga) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(245, 158, 11); // Amber 500
    doc.text('•', marginX, currentY);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const splitGa = doc.splitTextToSize(ga, contentWidth - 6);
    doc.text(splitGa, marginX + 5, currentY);
    currentY += splitGa.length * 4.2 + 1.5;
  });

  currentY += 4;

  // --- SECTION: GAYA KOMUNIKASI & LINGKUNGAN KERJA ---
  checkPageBreak(35);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('5. GAYA KOMUNIKASI & POLA INTERAKSI SOSIAL', marginX, currentY);
  currentY += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const commSplit = doc.splitTextToSize(profile.communicationStyle, contentWidth);
  doc.text(commSplit, marginX, currentY);
  currentY += commSplit.length * 4.2 + 5;

  checkPageBreak(35);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('6. GAYA KERJA & REKOMENDASI LINGKUNGAN KARIER', marginX, currentY);
  currentY += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const workSplit = doc.splitTextToSize(profile.workStyle, contentWidth);
  doc.text(workSplit, marginX, currentY);
  currentY += workSplit.length * 4.2 + 3;

  if (profile.careerPaths && profile.careerPaths.length > 0) {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`Bidang Karier yang Selaras: ${profile.careerPaths.join(' • ')}`, marginX, currentY);
    currentY += 6;
  }

  // --- SECTION: TIPS PRAKTIS KESEHARIAN UNTUK ORANG AWAM ---
  if (profile.dailyTips && profile.dailyTips.length > 0) {
    checkPageBreak(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);
    doc.text('7. TIPS PRAKTIS KESEHARIAN (ACTIONABLE ADVICE)', marginX, currentY);
    currentY += 5;

    profile.dailyTips.forEach((tip, idx) => {
      checkPageBreak(12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(79, 70, 229);
      doc.text(`${idx + 1}.`, marginX, currentY);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      const splitTip = doc.splitTextToSize(tip, contentWidth - 8);
      doc.text(splitTip, marginX + 6, currentY);
      currentY += splitTip.length * 4.2 + 2;
    });
    currentY += 4;
  }

  // --- FOOTER ON ALL PAGES ---
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184); // Slate 400
    doc.line(marginX, pageHeight - 12, pageWidth - marginX, pageHeight - 12);
    doc.text('SiapaSih? MBTI Assessment • Hasil Bersifat Reflektif & Bimbingan Diri • Dihitung Dinamis 100 Pertanyaan', marginX, pageHeight - 8);
    doc.text(`Halaman ${i} dari ${totalPages}`, pageWidth - marginX, pageHeight - 8, { align: 'right' });
  }

  // Save the PDF
  const filename = `Hasil-MBTI-${profile.code}-SiapaSih.pdf`;
  doc.save(filename);
}
