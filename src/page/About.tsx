import Mate from '../component/Mate';
import '../style/About.css';

const About = () => {
	return (
		<div className='about'>
			<div className="about-header">
				<h1>About us and our Project </h1>
				<p>This is us and our project .............................</p>
				<p>.......... another paragraph more longer and longer and longer and longer and longer and longer ............</p>
			</div>
			<h2 className='h2-about'>Our Team</h2>
			<div className='about-cards'>
				<Mate style='card card-l barbara' firstName='Barbara' lastName='Cano' login='bcano' imgLink='#/' role='Front' description='I made this shit and i wanna die 💀🔫' github='https://github.com/BarbaraC12' email='bcano@student.42.fr' />
				<Mate style='card card-r mate2' firstName='Firstname' lastName='Lastname' login='login' imgLink='#' role='Project Role' description='Something about what you do' github='https://github.com/name' email='email@email.com' />
				<Mate style='card card-l mate3' firstName='Firstname' lastName='Lastname' login='login' imgLink='#' role='Project Role' description='Something about what you do' github='https://github.com/name' email='email@email.com' />
				<Mate style='card card-r mate4' firstName='Firstname' lastName='Lastname' login='login' imgLink='#' role='Project Role' description='Something about what you do' github='https://github.com/name' email='email@email.com' />
				{/* <Mate style='card card-1' firstName='Babache' lastName='dit norminet' login='norminet' imgLink='#' role='RH' description="A ronronner sur une chaise pendant que Barbara s'arrache les cheveux sur une div pas droite. RrrrRrrrrRrrr" github='none' email='norminet@student.42.fr' /> */}

			</div>
		</div>
	)
}

export default About
