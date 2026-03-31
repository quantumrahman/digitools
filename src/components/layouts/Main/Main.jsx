import GetStartedSection from '../../ui/GetStartedSection/GetStartedSection.jsx';
import HomeSection from '../../ui/HomeSection/HomeSection.jsx';
import PremiumSection from '../../ui/PremiumSection/PremiumSection.jsx';
import StatsSection from '../../ui/StatsSection/StatsSection.jsx';

const Main = () => {
    return (
        <>
            <HomeSection></HomeSection>
            <StatsSection></StatsSection>
            <PremiumSection></PremiumSection>
            <GetStartedSection></GetStartedSection>
        </>
    );
};

export default Main;