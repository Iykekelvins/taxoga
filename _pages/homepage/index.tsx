import Hero from './hero';
import Stats from './stats';
import TaxComplianceSteps from './tax-compliance-steps';
import WhoWeServe from './who-we-serve';
import ChatWidget from './chat-widget';

const Home = () => {
	return (
		<div>
			<Hero />
			<Stats />
			<TaxComplianceSteps />
			<WhoWeServe />
			<ChatWidget />
		</div>
	);
};

export default Home;
