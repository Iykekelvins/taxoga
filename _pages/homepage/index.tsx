import Hero from './hero';
import Stats from './stats';
import TaxComplianceSteps from './tax-compliance-steps';
import ChatWidget from './chat-widget';

const Home = () => {
	return (
		<div>
			<Hero />
			<Stats />
			<TaxComplianceSteps />
			<ChatWidget />
		</div>
	);
};

export default Home;
