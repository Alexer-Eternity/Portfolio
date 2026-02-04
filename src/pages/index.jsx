import { useState } from 'react'
import { Github, Disc, Linkedin, Terminal } from 'lucide-react';
function Index() {
    const [count, setCount] = useState(0)

    return (
        <div className="index-container">

            <section className="card joke-card">
                <h2>> Alexander Wu</h2>
                <p className="glitch-text">
                    Half of the time I have no idea what I am doing;
                    the other half, I have no idea what I am supposed to be doing.
                </p>
            </section>
            <section className="card about-card">
                <h2>> About Me </h2>
                <p>
                    My name is Alexander, some people call me Ali,s while others call me Alex. I am a Computer Science student at <strong>UNSW</strong>, who views technology through the lens of foundational systems.
                </p>
                <p>
                    I look to philosophy and politics as a guiding tradition that providing the essential frameworks and logic that govern human interaction and thought.
                </p>
                <p>
                    While programming as the practical medium through which we extend those enduring principles into the digital frontier and ensure their relevance in the future.
                </p>
            </section>

            <section className="card social-card">
                <h2>
                    <Terminal size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Socials
                </h2>
                <div className="link-grid">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <Github size={24} />
                        <span>GITHUB</span>
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <Disc size={24} />
                        <span>DISCORD</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <Linkedin size={24} />
                        <span>LINKEDIN</span>
                    </a>
                </div>

            </section>

            <p className="read-the-docs">
                // End of Line.
            </p>
        </div>
    )
}

export default Index