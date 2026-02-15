import Hero from './hero';
import Stats from './stats';
import TaxComplianceSteps from './tax-compliance-steps';
import WhoWeServe from './who-we-serve';
import WhyTrustUs from './why-trust-us';
import Testimonials from './testimonials';
import TaxCommunity from './tax-community';
import Faqs from './faqs';
import ChatWidget from './chat-widget';
import ChatItems from './chat-items';

const Home = () => {
	return (
		<div>
			<Hero />
			<ChatItems />
			<Stats />
			<TaxComplianceSteps />
			<WhoWeServe />
			<WhyTrustUs />
			<Testimonials />
			<TaxCommunity />
			<Faqs />
			<ChatWidget />
		</div>
	);
};

export default Home;
