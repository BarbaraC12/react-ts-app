import ProjectName from '../var/ProjectName';
import React from 'react';
import '../style/Footer.css';

export default function App() {
  return (
			<div className="footer-basic">
				<footer>
					<p className="copyright"><ProjectName /> © 2023 | ft_trancendence | <a href="https://github.com/Balgor18/ft_transcendence" className='footer-link'>@github</a></p>
				</footer>
			</div>
  );
}