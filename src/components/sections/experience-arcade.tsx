import React from 'react';

interface ExperienceItem {
  when: string;
  role: string;
  org: string;
  desc: string;
  badge: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    when: 'Agu 2026 — sekarang',
    role: 'Staff Corporate Planning (Intern)',
    org: 'PT Angkasa Pura Aviasi · Kualanamu',
    desc: 'Empat sistem internal untuk kerja kantor harian: skor budaya kerja, tata kelola dokumen, manajemen tugas, dan kupon undian event.',
    badge: 'ONGOING',
  },
  {
    when: 'Sep 2024 — Mar 2025',
    role: 'Project Lead & UI/UX Designer',
    org: 'Innovillage 2025',
    desc: 'Memimpin tim yang membangun platform desa wisata dan aplikasi AR pendampingnya.',
    badge: 'CLEARED',
  },
  {
    when: 'Jan — Feb 2024',
    role: 'Programmer Intern',
    org: 'PTPN IV Regional 1',
    desc: 'Membangun monitoring video conference dan alat konversi laporan PDF ke Excel.',
    badge: 'CLEARED',
  },
  {
    when: '2024 — sekarang',
    role: 'Ketua Unit Riset & Mentoring',
    org: 'HIMASI UMSU',
    desc: 'Mengelola workshop riset dan mentoring untuk mahasiswa.',
    badge: 'SIDE QUEST',
  },
];

export const ExperienceArcade: React.FC = () => {
  return (
    <section className="section py-16 md:py-20 border-b-2 border-[var(--line)]" id="pengalaman">
      <div className="shell">
        <div className="sec-head">
          <div className="sec-head__left">
            <span className="sec-head__num">02</span>
            <h2>STAGE CLEAR</h2>
          </div>
          <span className="sec-head__note">4 STAGE SELESAI</span>
        </div>

        <div className="clears">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="clear">
              <div className="clear__when">{exp.when}</div>
              <div>
                <div className="clear__role">{exp.role}</div>
                <div className="clear__org">{exp.org}</div>
                <p className="clear__desc">{exp.desc}</p>
              </div>
              <div>
                <span
                  className="clear__badge"
                  style={
                    exp.badge === 'ONGOING'
                      ? { borderColor: 'var(--amber)', color: 'var(--amber)' }
                      : undefined
                  }
                >
                  {exp.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
