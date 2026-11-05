import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Github, Linkedin, Mail, Menu, Network, Shield, Code2, Cpu, ExternalLink, Award, Globe } from 'lucide-react'
import './style.css'

const projects = [
  { 
    no: '01', type: 'NETWORKING', 
    title: 'LEO Satellite Installation & Configuration (Starlink)', 
    desc: 'Conducting a Proof of Concept (POC) for the Starlink internet service to ensure that the internet connection functions properly, is stable, and meets the client’s requirements before it is deployed in a production environment.', 
    tags: ['Starlink Standard', 'Starlink Standard Actuated', 'Starlink Flat High Performance'] },

  { 
    no: '02', type: 'NETWORKING', 
    title: 'Staging & Configuration SD-WAN', 
    desc: 'pre-configure the SD-WAN router before it is activated and integrated with the customer’s system.', 
    tags: ['Huawei AR617VW-LTE4EA', 'Huawei AR651', 'Cisco Meraki'] },

  { 
    no: '03', type: 'NETWORKING', 
    title: 'Cisco Certified Network Professional (CCNP)', 
    desc: 'An advanced course for building and managing enterprise-scale networks. Participants learn dynamic routing protocols such as EIGRP, OSPF, and BGP, IPv6 implementation, site-to-site VPN connectivity through DMVPN, and Route Redistribution for linking different routing domains. Ideal for network engineers who want to deepen their skills in designing and troubleshooting complex networks.', 
    tags: ['EIGRP', 'OSPF', 'BGP', 'IPv6', 'DMVPN', 'Route Redistribution'] },

  { 
    no: '04', type: 'NETWORKING', 
    title: 'Cisco Certified Network Associate (CCNA)', 
    desc: 'A foundational to intermediate course that builds a strong base for a networking career. It covers Network Fundamentals, basic device configuration, Switching and Routing, traffic control with Access Lists, Network Address Translation (NAT), gateway redundancy through First Hop Redundancy Protocol (FHRP), automatic addressing with DHCP, Tunneling, and IPv6. Perfect for beginners who want a comprehensive understanding of how networks work.', 
    tags: ['Network Fundamentals', 'Basic Configuration', 'Switching', 'Routing', 'Access Lists', 'NAT', 'FHRP', 'DHCP', 'Tunneling', 'IPv6'] },

  { 
    no: '05', type: 'NETWORKING', 
    title: 'MikroTik Certified Routing Engineer (MTCRE)', 
    desc: 'Developed advanced networking knowledge and practical skills in routing configuration, network management, and infrastructure optimization using MikroTik RouterOS. Covered various routing technologies and techniques.', 
    tags: ['BGP', 'OSPF', 'MPLS'] },

  { 
    no: '06', type: 'NETWORKING', 
    title: 'MikroTik Certified Network Associate (MTCNA)', 
    desc: 'An entry-level course for getting started with MikroTik devices. Participants learn an introduction to RouterOS, basic settings, IP Addressing, Routing, DHCP, Firewall and Filter basics, Wireless network setup, Quality of Service (QoS), Bandwidth and Queue Management, basic VPN, and Monitoring and Troubleshooting. Great for beginners who want to configure and maintain MikroTik-based networks.', 
    tags: ['Introduction to RouterOS', 'Basic Settings', 'IP Addressing', 'Routing', 'DHCP', 'Firewall', 'Filter', 'Wireless', 'QoS', 'Bandwidth', 'Queue', 'VPN', 'Monitoring', 'Troubleshooting'] }

]

const experiences = [
  {
    type: 'INTERNSHIP EXPERIENCE',
    title: 'PT Mega Akses Persada (FiberStar)',
    role: 'Technical Solution Division',
    desc: 'Gained exposure to data center server maintenance, SD-WAN proof of concept activities, and field device handling. This experience helped me understand how technical solutions are applied in real working environments.'
  },
  {
    type: 'Backpacking Experience',
    title: 'Backpacking to 11 Countries in Asia',
    role: 'Senior High School Student',
    desc: 'Took part in a school-led backpacking journey across 11 countries, exploring diverse cultures, languages, and ways of life firsthand. The experience strengthened my independence, adaptability, and teamwork, and taught me how to plan, navigate unfamiliar environments, and solve problems on the go.'
  }, 
  {
    type: 'Trainer Experience',
    title: 'Trainer SMK Farmasi Avicenna Cileungsi',
    role: 'Senior High School Student',
    desc: 'Delivered introductory networking training to vocational high school students, focusing on MikroTik Certified Network Associate (MTCNA) concepts and fundamental networking principles.'
  },
  {
    type: 'Trainer Experience',
    title: 'Trainer Bootcamp In IDN Boarding School',
    role: 'Senior High School Student',
    desc: 'Conducted fiber optic networking training sessions for students at IDN Boarding School, focusing on fundamental fiber optic technologies, installation techniques, and practical implementation in telecommunications infrastructure.'
  },
  {
    type: 'Trainer Experience',
    title: 'Trainer SMKN 26 Jakarta Timur',
    role: 'Senior High School Student',
    desc: 'Delivered networking training sessions to vocational high school students, focusing on Cisco Certified Network Associate (CCNA) concepts, network fundamentals, and dynamic routing configuration.'
  }
]

const achievements = [
  {
    year: '2025',
    title: 'CCNA Certification',
    org: 'Cisco Networking Academy',
    desc: 'Demonstrated foundational knowledge of networking technologies, including network configuration, routing and switching, IP connectivity, network services, and basic network security based on Cisco networking standards.'
  },
  {
    year: '2023',
    title: 'MTCRE Certification',
    org: 'MikroTik Academy',
    desc: 'Demonstrated knowledge of advanced routing technologies, including OSPF, BGP, route filtering, route redistribution, MPLS, network security, and load balancing.'
  },
  {
    year: '2023',
    title: 'MTCNA Certification',
    org: 'MikroTik Academy',
    desc: 'Developed foundational knowledge of MikroTik networking technologies, including RouterOS configuration, IP addressing, basic routing, DHCP, and network management.'
  },
  {
    year: '2023',
    title: 'History Competition Winner',
    desc: 'Demonstrated knowledge and understanding of Indonesian national history, including important historical events, national figures, and the development of Indonesia.'
  },
  {
    year: '2023',
    title: 'Cybersecurity Fundamentals Certification',
    desc: 'Demonstrated knowledge and understanding of cybersecurity principles, including network security, system protection, and security fundamentals.'
  },
  {
    year: '2023',
    title: 'Networking Fundamentals Certification',
    desc: 'Demonstrated knowledge and understanding of networking fundamentals, including network configuration, routing and switching, IP connectivity, network services, and basic network security.'
  }
]

function App() {
  return <main>
    <nav className="nav wrap">
      <a className="brand" href="#home">
        <span className="brand-mark">S</span>
        <span>SATRIA<span className="muted">/PORTFOLIO</span>
        </span></a>
      <div className="navlinks">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>
      <a className="nav-cta" href="#contact">LET'S CONNECT <ArrowUpRight size={14}/></a>
    </nav>

    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR LEARNING & COLLABORATION</div>
        <h1>Curious mind.<br/><em>Building</em> what's next.</h1>
        <p className="hero-desc">Hi, I'm <strong>Ananda Bagus Satria</strong> — an Information Technology student interested in networking, cybersecurity, and technology research.</p>
        <div className="hero-actions"><a className="button primary" href="#projects">EXPLORE MY WORK <ArrowUpRight size={16}/></a><a className="text-link" href="#about">MORE ABOUT ME <span>↓</span></a></div>
      </div>
      <div className="hero-art">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="core"><Network size={58} strokeWidth={1.1}/><span>TECH<br/>MINDSET</span></div>
 <div className="float-card card-a"><span className="tiny-label">FOCUS_01</span><Network size={18}/><b>NETWORK</b></div>
<div className="float-card card-b"><span className="tiny-label">FOCUS_02</span><Cpu size={18}/><b>RESEARCH</b></div>
<div className="float-card card-c"><span className="tiny-label">FOCUS_03</span><Shield size={18}/><b>SECURITY</b></div>
<div className="float-card card-d"><span className="tiny-label">FOCUS_04</span><Code2 size={18}/><b>WEB</b></div>
<div className="float-card card-e"><span className="tiny-label">FOCUS_05</span><Globe size={18}/><b>DESIGN</b></div>
        <div className="hero-index">01 / INTRODUCTION</div>
      </div>
      <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section id="about" className="section wrap">
      <div className="section-kicker">01 — ABOUT ME</div>
      <div className="about-grid"><h2>Learning today.<br/><em>Creating tomorrow.</em></h2><div><p className="large-copy">I enjoy understanding how technology works — from connecting networks to exploring how digital systems can be made better.</p><p className="body-copy">I'm currently studying Information Technology at President University. Through academic labs and internship experience, I'm developing practical skills, learning to solve problems, and discovering where I can contribute in the tech industry.</p><div className="facts"><div><b>IT</b><span>FIELD OF STUDY</span></div><div><b>2023</b><span>LEARNING JOURNEY</span></div><div><b>∞</b><span>CURIOSITY LEVEL</span></div></div></div></div>
    </section>

    <section id="skills" className="section skills-section">
      <div className="wrap"><div className="section-kicker">02 — WHAT I'M EXPLORING</div><h2>Skills & <em>interests.</em></h2>
        <div className="skill-grid">
          <article className="skill-card">
            <Network/>
            <h3>Networking</h3>
            <p>IP addressing, subnetting, VLAN, routing, and network troubleshooting.</p>
            <span>01 / CORE INTEREST</span>
            </article>
          <article className="skill-card">
            <Shield/>
            <h3>Cybersecurity</h3>
            <p>Exploring network security concepts, system protection, and security fundamentals.</p>
            <span>02 / GROWING INTEREST</span>
          </article>
          <article className="skill-card">
            <Code2/>
            <h3>Web & Technology</h3>
            <p>Building simple web experiences and learning tools that turn ideas into solutions.</p>
            <span>03 / CURRENTLY LEARNING</span>
          </article>
          <article className="skill-card">
            <Cpu/>
            <h3>Research & Design</h3>
            <p>Interested in researching technology, exploring ideas, and presenting them clearly.</p>
            <span>04 / CREATIVE PROCESS</span>
          </article>
                    <article className="skill-card">
            <Code2/>
            <h3>Design</h3>
            <p>Creating visually appealing and user-friendly interfaces.</p>
            <span>05 / CURRENTLY LEARNING</span>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" className="section wrap">
      <div className="section-kicker">03 — SELECTED WORK</div>
      <div className="project-heading">
        <h2>Things I've <em>built.</em></h2>
        <p>A few projects and practice labs from my learning journey. More coming soon.</p>
        </div>

      <div className="project-list">{projects.map(p=><article className="project" key={p.no}>
        <div className="project-no">{p.no}</div>
        <div className="project-main">
          <span className="project-type">{p.type}</span>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="tags">{p.tags.map(t=>
            <span key={t}>{t}</span>)}
            </div>
            </div>
            <div className="project-arrow"><ArrowUpRight/>
            </div>
            </article>)}
            </div>
    </section>

<section className="section experience">
  <div className="wrap experience-grid">
    <div>
      <div className="section-kicker">04 — EXPERIENCE</div>
      <h2>Professional<br/><em>Experience</em></h2>
    </div>

    <div className="experience-list">
      {experiences.map((e, i) => (
        <div className="experience-item" key={e.title}>
          <span className="project-type">
            <span className="exp-no">{String(i + 1).padStart(2, '0')}</span> {e.type}
          </span>

          <h3>{e.title}</h3>
          <p>{e.role}</p>
          <p className="body-copy">{e.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="achievements" className="section wrap">
  <div className="section-kicker">05 — ACHIEVEMENTS</div>
  <h2>Milestones <em>along the way.</em></h2>
  <div className="achievement-grid">

    {achievements.map(a => (
      <article className="achievement-card" key={a.title}>
        <div className="achievement-top">
          <Award size={22} />
          <span className="achievement-year">{a.year}</span>
        </div>

        <h3>{a.title}</h3>
        {a.org && <p className="achievement-org">{a.org}</p>}
        <p className="body-copy">{a.desc}</p>
      </article>
    ))}
  </div>
</section>    

    <section id="contact" 
    className="contact wrap">
      <div className="section-kicker">05 — GET IN TOUCH</div>
      <h2>Have an idea?<br/><em>Let's connect.</em></h2>
      <p>I'm open to learning opportunities, collaboration, and conversations about technology.</p>
      <div className="contact-links">
        <a href="mailto:andbagussatria@gmail.com"><Mail/> EMAIL ME <ArrowUpRight/></a>
        <a href="https://github.com/bgsztr" target="_blank" rel="noreferrer"><Github/> GITHUB <ExternalLink/></a>
        <a href="https://www.linkedin.com/in/ananda-bagus-satria-663087362/" target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN <ExternalLink/></a>
      </div>
      
      <footer>
        <span>© 2026 ANANDA BAGUS SATRIA</span>
        <span>DESIGNED & BUILT WITH CURIOSITY.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </section>
  </main>
}
createRoot(document.getElementById('root')).render(<App />)
