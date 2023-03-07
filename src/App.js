import { DEFAULT, DEFAULT_CONTENTS, NAV, DEFAULT_PRODUCT } from "./data/default";
import { notice } from "./data/notice";
import { event } from "./data/event";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import MainBanner from "./pages/MainBanner";
import MainContent from "./pages/MainContent";
import MainMovie from "./pages/MainMovie";
import MainProduct from "./pages/MainProduct";
import MainTab from "./pages/MainTab";
import MainVisual from "./pages/MainVisual";
import MainYoutube from "./pages/MainYoutube";
import TopBanner from "./pages/TopBanner";

const App = () => {
    return (
        <>
            <TopBanner DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            <Header DEFAULT={DEFAULT} NAV={NAV} />
            <MainVisual DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            <MainContent DEFAULT_CONTENTS={DEFAULT_CONTENTS} DEFAULT_PRODUCT={DEFAULT_PRODUCT} />
            <MainBanner DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            <MainMovie DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            {/* <MainYoutube /> */}
            <MainProduct DEFAULT_CONTENTS={DEFAULT_CONTENTS} DEFAULT_PRODUCT={DEFAULT_PRODUCT} />
            <MainTab notice={notice} event={event} DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            {/* <Footer DEFAULT={DEFAULT} NAV={NAV} /> */}
        </>
    )
}

export default App;




// https://c1jang.github.io/project01/