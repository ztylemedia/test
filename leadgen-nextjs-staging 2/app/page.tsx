import { ArrowRight, ArrowUpRight, Check, Globe2, Layers3, MessageSquare, Target, Users, CalendarDays, BarChart3, ShieldCheck, Phone, Mail, Menu, Linkedin, Clock3 } from 'lucide-react';

const BOOKING = 'https://meetings-eu1.hubspot.com/hello-leadgen';

function Button({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <a className={secondary ? 'button button-secondary' : 'button'} href={BOOKING} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={17}/></a>;
}

const services = [
  { icon: Phone, title: 'Multichannel prospecting', text: 'Reach decision-makers through coordinated phone, email and LinkedIn outreach.' },
  { icon: Target, title: 'ICP research & data', text: 'Define your ideal customer profile and build focused, relevant target-account lists.' },
  { icon: Users, title: 'Outsourced SDR services', text: 'Add an experienced sales development team without the time and overhead of building one in-house.' },
  { icon: Globe2, title: 'Nordic partner acquisition', text: 'Identify, engage and develop relationships with potential channel and technology partners.' },
];

export default function Home() {
  return <main>
    <header className="header wrap">
      <a className="logo" href="#top" aria-label="Leadgen home">leadgen<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#who">Who We Are</a><a href="#what">What We Do</a><a href="#process">How It Works</a><a href="#cases">Case Studies</a><a href="#contact">Contact</a></nav>
      <Button>Book a call</Button>
      <a className="mobile-menu" href="#contact" aria-label="Contact Leadgen"><Menu/></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span/> B2B SALES DEVELOPMENT · THE NORDICS</div>
          <h1>Qualified sales meetings.<br/><em>Delivered to your calendar.</em></h1>
          <p className="hero-lead">We help B2B tech companies accelerate sales by connecting them with qualified leads and the decision-makers who matter.</p>
          <div className="hero-actions"><Button>Book a discovery call</Button><a className="text-link" href="#process"><span className="play">↓</span> Discover how we work</a></div>
          <div className="hero-points"><span><Check/> Focused outreach</span><span><Check/> Experienced SDRs</span><span><Check/> Measurable progress</span></div>
        </div>
        <div className="visual" aria-label="Leadgen's Nordic sales development network">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="map-shape">✦</div>
          <div className="map-label norway">NORWAY</div><div className="map-label sweden">SWEDEN</div><div className="map-label finland">FINLAND</div><div className="map-label denmark">DENMARK</div>
          <div className="hub"><span>l.</span></div>
          <div className="signal-card card-one"><Target/><div><b>Target accounts</b><small>Research and data collection</small></div></div>
          <div className="signal-card card-two"><MessageSquare/><div><b>Relevant conversations</b><small>Phone, email and LinkedIn</small></div></div>
          <div className="signal-card card-three"><CalendarDays/><div><b>Qualified meetings</b><small>Delivered to your calendar</small></div></div>
        </div>
      </div>
    </section>

    <section className="stats"><div className="wrap stats-inner"><h2>Your Nordic partner<br/>for B2B growth</h2><div className="stat"><Globe2/><div><strong>4</strong><span>Nordic countries</span></div></div><div className="stat"><Layers3/><div><strong>850+</strong><span>completed projects</span></div></div><div className="stat"><CalendarDays/><div><strong>10k+</strong><span>booked and held sales meetings</span></div></div></div></section>

    <section className="section wrap" id="what">
      <div className="eyebrow dark"><span/> WHAT WE DO</div><h2 className="section-title">Build your pipeline. Start more conversations.</h2>
      <p className="section-intro">From research and targeting to outreach and meeting booking, we support the activities that move your sales process forward. Our team works as an extension of yours, with a clear focus on reaching the right people.</p>
      <div className="service-grid">{services.map(({icon: Icon,title,text},i)=><article className="service-card" key={title}><div className="service-icon"><Icon/></div><span className="service-number">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href="#contact">Explore the opportunity <ArrowRight size={15}/></a></article>)}</div>
    </section>

    <section className="process-section" id="process"><div className="wrap"><div className="eyebrow dark"><span/> HOW IT WORKS</div><h2 className="section-title">A clear process. A team moving together.</h2><p className="section-intro">We combine a structured kickoff with focused prospecting and ongoing communication, so everyone knows what is happening and what comes next.</p>
      <div className="process-grid"><article className="process-card"><div className="card-top"><b>01</b><Target/></div><h3>The kickoff</h3><p>We align on your offering, value proposition, ideal customer profile and campaign goals. Together, we develop the messaging and target lists.</p></article><div className="flow-arrow"><ArrowRight/></div><article className="process-card"><div className="card-top"><b>02</b><MessageSquare/></div><h3>Prospecting</h3><p>Our project managers and SDRs validate the message and target audience before outreach begins across the selected channels.</p></article><div className="flow-arrow"><ArrowRight/></div><article className="process-card"><div className="card-top"><b>03</b><CalendarDays/></div><h3>Communication &amp; delivery</h3><p>Daily collaboration and regular status updates keep the campaign aligned. Qualified leads and meetings are passed to your team.</p></article></div>
    </div></section>

    <section className="dark-section" id="cases"><div className="wrap case-layout"><div><div className="eyebrow"><span/> CUSTOMER STORY</div><h2>Growing a technology partner network across the Nordics</h2><p>Leadgen supported a key IT distributor with a partner acquisition campaign, helping expand its footprint in the Nordic market.</p><Button secondary>Discuss a partner campaign</Button></div><article className="case-card"><div className="case-image"><div className="city-glow">NORDIC<br/>PARTNER<br/>GROWTH</div></div><div className="case-copy"><div className="eyebrow dark"><span/> CLIENT FEEDBACK</div><h3>“The campaign was up and running in less than two weeks.”</h3><p>“It didn't take long before the first meeting showed up in our calendar.”</p><div className="quote-credit">James Finn <span>· Market Channel Manager</span></div></div></article></div></section>

    <section className="section wrap" id="who"><div className="why-layout"><div><div className="eyebrow dark"><span/> WHO WE ARE</div><h2 className="section-title">B2B tech experience. Nordic market knowledge.</h2><p className="section-intro">Our team works across Sweden, Norway, Denmark and Finland. With more than a decade of B2B technology experience, we understand how to create relevant conversations in complex markets.</p></div><div className="benefits"><div className="benefit"><Users/><div><b>Experienced team</b><p>Project managers and SDRs focused on B2B technology.</p></div></div><div className="benefit"><BarChart3/><div><b>Commitment to results</b><p>Campaign goals and clear progress throughout the engagement.</p></div></div><div className="benefit"><Globe2/><div><b>Nordic coverage</b><p>Local market understanding across all four Nordic countries.</p></div></div><div className="benefit"><ShieldCheck/><div><b>Extension of your team</b><p>Close communication and collaboration from kickoff to delivery.</p></div></div></div></div></section>

    <section className="cta-section" id="contact"><div className="wrap cta-inner"><div className="eyebrow"><span/> LET'S TALK</div><h2>Let's do something great together.</h2><p>Join us for a discovery call to discuss your sales strategy, value proposition and growth ambitions. We'll explore how Leadgen can help you reach the right people.</p><Button>Schedule a discovery call</Button><div className="contact-details"><a href="mailto:hello@leadgenagency.se"><Mail size={17}/> hello@leadgenagency.se</a><span><Clock3 size={17}/> Sweden · Norway · Denmark · Finland</span></div></div></section>

    <footer className="footer"><div className="wrap footer-inner"><a className="logo" href="#top">leadgen<span>.</span></a><p>Qualified sales meetings delivered to your calendar.</p><a href="mailto:hello@leadgenagency.se">hello@leadgenagency.se</a><a href="#top" className="back-top">Back to top ↑</a><small>© {new Date().getFullYear()} Leadgen Agency. All rights reserved.</small></div></footer>
  </main>;
}
