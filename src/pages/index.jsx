import { Github, Linkedin,ExternalLink,Mail } from 'lucide-react';
import {SiDiscord,SiGithub} from '@icons-pack/react-simple-icons';
function Index() {


    return (
        <div className="index-container">
            <div className="header-container">
            <div className="side-by-side-container">
            <section className="card joke-card ">
                <h2>&gt; Alexander Wu</h2>
                <p >
                    Half of the time I have no idea what I am doing;
                    the other half, I have no idea what I am supposed to be doing.
                </p>

            </section>
            <section className="card social-card ">
                <h2>&gt; Socials</h2>
                <div className="link-grid">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <SiGithub size={24} />
                        <span>GITHUB</span>
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <SiDiscord size={24} />
                        <span>DISCORD</span>
                    </a>
                    <a href="https://www.linkedin.com/in/alexander-wu-90611923a/" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <Linkedin size={24} />
                        <span>LINKEDIN</span>
                    </a>
                    <a href="mailto://alex@alexer.au" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <Mail size={24} />
                        <span>EMAIL</span>
                    </a>
                </div>
            </section>
            </div>
            <section className="card about-card">
                <h2>&gt; About Me </h2>
                <p>
                    My name is Alexander, some people call me Ali, while others call me Alex. I am a Computer Science student at UNSW. My favourite programming language is Go but I am always exploring new languages and libraries.
                </p>
                <p>
                    I look to philosophy and politics as a guiding tradition that providing the essential frameworks and logic that govern human interaction and thought. While programming as the practical medium through which we extend those enduring principles into the digital frontier and ensure their relevance in the future.
                </p>

            </section>
            <section className="card project-header-card"><h2>&gt; My projects</h2></section>
            </div>
            <div className="side-by-side-container">
            <section className="card project-card">
                <h2>#0: Election App



                    <div className="link-grid" >
                        <a href="https://github.com/Alexer-Eternity/12SE-Project" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <Github size={20} />
                            <span>REPO</span>
                        </a>

                    </div>
                </h2>
            <div className="project-content">

            <p>
                       Developed a election app for my year 12 Software Engineering project that uses email address to identify and verify voters
                    </p>
                    <p>
                        <strong>Things I learned:</strong>
                    </p>
                    <ul>
                        <li>Use Resend to send verification codes</li>
                        <li>Implement client side authentication using JWT tokens</li>
                        <li>Writing comprehensive software documentation regarding the purpose, structure and development process.</li>
                    </ul>
                </div>
            </section>

            <section className="card project-card">
                <h2>#1: Gopher.gg


                    <div className="link-grid" >
                        <a href="https://github.com/Alexer-Eternity/gopher.gg" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <Github size={20} />
                            <span>REPO</span>
                        </a>
                        <a href="https://www.gopher.gg" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <ExternalLink size={20} />
                            <span>DEMO</span>
                        </a>

                    </div>
                </h2>
                <div className="project-content">
                    <p>
                        A website I made to promote the go programming language that I made to justify my investment in the domain name
                    </p>
                    <p>
                        <strong>Things I learned:</strong>
                    </p>
                    <ul>
                        <li>Use Vercel functions to develop a proxy for cross origin HTML requests</li>
                        <li>Use React and Vite to develop an interactive frontend</li>
                        <li>Embedding external elements such as <a href="https://github.com/giraffe-fsharp/Giraffe" target="_blank" rel="noopener noreferrer">Monaco Editor</a> into my React site</li>
                    </ul>
                </div>
            </section>
            </div>
            <div className="side-by-side-container">

            <section className="card project-card">
                <h2>#2: Chess Server



                    <div className="link-grid" >
                        <a href="https://github.com/Alexer-Eternity/12SE-Project" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <Github size={20} />
                            <span>REPO</span>
                        </a>
                        <a href="https://chess-server-d7hcetbyhaavdecd.australiaeast-01.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <ExternalLink size={20} />
                            <span>DEMO</span>
                        </a>

                    </div>
                </h2>
                <div className="project-content">

                    <p>
                        A project I made when I was bored and wanted to learn a new programming language. Also because someone told me that Functional Paradigm is better
                    </p>
                    <p>
                        <strong>Things I learned:</strong>
                    </p>
                    <ul>
                        <li>The basic of web development using DOTNET, F# and <a href="https://github.com/giraffe-fsharp/Giraffe" target="_blank" rel="noopener noreferrer">Giraffe</a></li>
                        <li>Render a chessboard in Javascript using libraries like <a href="https://chessboardjs.com/" target="_blank" rel="noopener noreferrer">Chessboard.js</a></li>
                        <li>Verifying chess moves and determining the result of a game using <a href="https://github.com/lrepaty/ChessDotNetCore" target="_blank" rel="noopener noreferrer"> ChessDotNetCore </a></li>

                        <li>Web hosting with Azure App Services</li>
                    </ul>
                </div>
            </section>

            <section className="card project-card">
                <h2>#2: Haunted


                    <div className="link-grid" >
                        <a href="https://github.com/Ruiqiu7/DayDream-Sydney-Hackathon" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <Github size={20} />
                            <span>REPO</span>
                        </a>
                        <a href="https://alexanderwu.itch.io/huanted-house" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <ExternalLink size={20} />
                            <span>DEMO</span>
                        </a>

                    </div>
                </h2>
                <div className="project-content">
                    <p>
                        A game I made for the Daydream Hackathon with and <a href="https://https://github.com/Ruiqiu7" target="_blank" rel="noopener noreferrer">Rachel</a> and <a href="https://github.com/cstella88" target="_blank" rel="noopener noreferrer">Clarisse</a>
                    </p>
                    <p>
                        <strong>Things I learned:</strong>
                    </p>
                    <ul>
                        <li>Collaborate on a git repository my working on different branches and resolving merge conflicts with my team</li>
                        <li>Basics of game development using Godot and Godot script programming languages </li>
                        <li>Developing a range of game mechanics including player lives, collectables, timers and cutscenes</li>
                        <li>Compiling games into Web Assembly to host them on to itch.io</li>
                    </ul>
                </div>
            </section>
        </div>



            <p className="read-the-docs">
                // End of Line.
            </p>
        </div>
    )
}

export default Index