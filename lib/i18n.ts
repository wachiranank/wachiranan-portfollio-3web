export type Lang = 'en' | 'th'

export const t = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
      hire: 'Hire me',
    },
    hero: {
      role: 'Frontend Developer & UI Designer',
      greeting: "Hi, I'm",
      name: 'Wachiranan',
      description:
        'I craft stunning, conversion-focused interfaces with modern web technologies. Turning ideas into polished digital experiences.',
      cta_work: 'View my work',
      cta_contact: 'Get in touch',
      scroll: 'Scroll',
    },
    about: {
      label: 'About me',
      heading: 'Passionate about building',
      heading_accent: 'great things',
      bio1:
        "I'm Wachiranan Khanngern, a frontend developer based in Thailand with a passion for creating beautiful, functional web experiences. I specialize in React and Next.js, with a strong eye for UI/UX design.",
      bio2:
        "When I'm not coding, I'm exploring new design trends, contributing to open-source, and finding ways to make the web a more visually compelling place.",
      traits: [
        {
          title: 'Clean Code',
          description: 'Writing maintainable, well-structured code that scales with your product.',
        },
        {
          title: 'Design Sense',
          description: 'Translating designs into pixel-perfect, accessible interfaces.',
        },
        {
          title: 'Performance',
          description: 'Optimized builds, fast load times, and smooth interactions.',
        },
      ],
    },
    work: {
      label: 'Featured work',
      heading: "Projects I've built",
      source: 'Source',
      live: 'Live',
      projects: [
        {
          title: 'E-Commerce Platform',
          description:
            'A full-featured storefront with product filters, cart, and checkout — built for speed and conversion.',
        },
        {
          title: 'SaaS Dashboard',
          description:
            'Analytics-heavy admin panel with real-time charts, data tables, and role-based access.',
        },
        {
          title: 'Portfolio & Blog',
          description:
            'Content-first personal site with MDX blog, dark mode, and optimized Core Web Vitals.',
        },
        {
          title: '3D Product Showcase',
          description:
            'Interactive 3D product viewer with Spline integration and animated feature highlights.',
        },
      ],
    },
    skills: {
      label: 'Expertise',
      heading: 'Skills & tools',
    },
    contact: {
      label: 'Get in touch',
      heading: "Let's work together",
      description:
        "I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open.",
      cta: 'Say hello',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with Next.js & Tailwind CSS',
    },
  },
  th: {
    nav: {
      about: 'เกี่ยวกับฉัน',
      work: 'ผลงาน',
      skills: 'ทักษะ',
      contact: 'ติดต่อ',
      hire: 'จ้างฉัน',
    },
    hero: {
      role: 'นักพัฒนา Frontend & นักออกแบบ UI',
      greeting: 'สวัสดี ฉันชื่อ',
      name: 'วชิรนันท์',
      description:
        'ฉันสร้างอินเทอร์เฟซที่สวยงามและมุ่งเน้นการแปลงผู้ใช้ด้วยเทคโนโลยีเว็บสมัยใหม่ เปลี่ยนไอเดียให้กลายเป็นประสบการณ์ดิจิทัลที่สมบูรณ์แบบ',
      cta_work: 'ดูผลงานของฉัน',
      cta_contact: 'ติดต่อฉัน',
      scroll: 'เลื่อนลง',
    },
    about: {
      label: 'เกี่ยวกับฉัน',
      heading: 'หลงใหลในการสร้างสรรค์',
      heading_accent: 'สิ่งที่ยอดเยี่ยม',
      bio1:
        'ฉันคือ วชิรนันท์ ขันแก้ว นักพัฒนา Frontend ที่อาศัยอยู่ในประเทศไทย หลงใหลในการสร้างประสบการณ์เว็บที่สวยงามและใช้งานได้จริง เชี่ยวชาญใน React และ Next.js พร้อมมีสายตาที่แหลมคมด้านการออกแบบ UI/UX',
      bio2:
        'เวลาที่ไม่ได้เขียนโค้ด ฉันจะสำรวจเทรนด์การออกแบบใหม่ๆ มีส่วนร่วมในโอเพนซอร์ส และค้นหาวิธีทำให้เว็บน่าสนใจยิ่งขึ้น',
      traits: [
        {
          title: 'โค้ดที่สะอาด',
          description: 'เขียนโค้ดที่ดูแลรักษาได้ง่าย มีโครงสร้างดี และขยายได้ตามผลิตภัณฑ์',
        },
        {
          title: 'ความรู้สึกด้านการออกแบบ',
          description: 'แปลงดีไซน์ให้กลายเป็นอินเทอร์เฟซที่สมบูรณ์แบบและเข้าถึงได้',
        },
        {
          title: 'ประสิทธิภาพสูง',
          description: 'บิลด์ที่ปรับแต่งแล้ว โหลดเร็ว และการโต้ตอบที่ลื่นไหล',
        },
      ],
    },
    work: {
      label: 'ผลงานที่โดดเด่น',
      heading: 'โปรเจกต์ที่ฉันสร้าง',
      source: 'ซอร์สโค้ด',
      live: 'ดูสด',
      projects: [
        {
          title: 'แพลตฟอร์มอีคอมเมิร์ซ',
          description:
            'ร้านค้าออนไลน์ครบครันพร้อมตัวกรองสินค้า ตะกร้า และการชำระเงิน — สร้างเพื่อความเร็วและการแปลง',
        },
        {
          title: 'แดชบอร์ด SaaS',
          description:
            'แผงผู้ดูแลระบบที่เน้นการวิเคราะห์ด้วยกราฟแบบเรียลไทม์ ตารางข้อมูล และการเข้าถึงตามบทบาท',
        },
        {
          title: 'พอร์ตโฟลิโอ & บล็อก',
          description:
            'เว็บไซต์ส่วนตัวที่เน้นเนื้อหาพร้อมบล็อก MDX โหมดมืด และ Core Web Vitals ที่ปรับแต่งแล้ว',
        },
        {
          title: 'โชว์เคสสินค้า 3D',
          description:
            'ผู้ชมสินค้า 3D แบบโต้ตอบพร้อมการผสาน Spline และไฮไลต์ฟีเจอร์แบบเคลื่อนไหว',
        },
      ],
    },
    skills: {
      label: 'ความเชี่ยวชาญ',
      heading: 'ทักษะและเครื่องมือ',
    },
    contact: {
      label: 'ติดต่อฉัน',
      heading: 'มาทำงานด้วยกัน',
      description:
        'ฉันพร้อมรับโอกาสใหม่ๆ ไม่ว่าคุณจะมีโปรเจกต์ในใจหรือแค่อยากทักทาย กล่องจดหมายของฉันเปิดรับเสมอ',
      cta: 'ทักทายฉัน',
    },
    footer: {
      rights: 'สงวนลิขสิทธิ์',
      built: 'สร้างด้วย Next.js & Tailwind CSS',
    },
  },
}
