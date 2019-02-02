const { Component } = React;
const { render } = ReactDOM;

const navListItems = ["首頁", "每日精選", "讀者評論", "關於我們"]
const sections = [
    {
        sectionTitle: "美國研究：「年齡」才是分享假新聞最重要因素",
        sectionContent: "近年來政治傳播有越來越強調切入年輕選民的趨勢，最近也有一場很有意思的論壇在講這個趨勢，但讀完這篇論文後反而更有感，畢竟台灣的選民結構中 61 歲以上的占比一直超過 30%，如果將 51 歲以上也計入的話普遍超過一半。",
        sectionSource: "https://www.inside.com.tw/",
        sectionSourceName: "INSIDE 硬塞的網路趨勢觀察"
    },
    {
        sectionTitle: "耕興深化與電信業者合作，共構 5G 商轉完整測試能量",
        sectionContent: "在 2018 年全球首波 5G 頻譜拍賣的國家從歐亞到北美已相繼展開，而目前美國係初期支援 5G 服務的城市數量最多的國家，各品牌通訊大廠積極在全美各大城市進行新一代 5G 商用實網測試。",
        sectionSource: "https://www.inside.com.tw/",
        sectionSourceName: "INSIDE 硬塞的網路趨勢觀察"
    },
    {
        sectionTitle: "中國「先審後播」短影音規定，正在成為維穩新手段",
        sectionContent: "同時這些工作也巧妙把社會維穩成本轉嫁給了那些賺錢的科技網路公司，成了另類壓榨民營企業利潤的有效手段；只要有心，官方時不時還能拿這檔事控制企業。",
        sectionSource: "https://www.inside.com.tw/",
        sectionSourceName: "INSIDE 硬塞的網路趨勢觀察"
    },
    {
        sectionTitle: "介面設計師轉職之路",
        sectionContent: "網路上相關資源很多，但也因此資訊爆炸亂，如果剛開始想學習 UI 設計，該怎麼開始怎麼走呢？目前台灣各大專院校也尚無完整的科系課程可以讓你學習UI/UX設計，因此大多數的設計師都是從其他領域轉職過來，甭擔心非相關背景會不適應，找到自己的學習地圖，就不會太難。",
        sectionSource: "https://www.inside.com.tw/",
        sectionSourceName: "INSIDE 硬塞的網路趨勢觀察"
    },
    {
        sectionTitle: "深入柬埔寨──那些傷口無法癒合的漁工們",
        sectionContent: "雨季夜晚她都無法入睡，總那樣坐著，等丈夫清晨下班回家。Korng Nal今年56歲，穿著和前天一樣的花布睡衣，身材寬大結實。17年前，她和丈夫Ya Sorhorn被政府趕出柬埔寨金邊市中心的集合住宅「白色大樓」，他們及其他同樣違法佔屋的貧民，被安置到金邊市外圍空地。大夥勉強用鐵皮搭起容身之處。",
        sectionSource: "https://www.twreporter.org/",
        sectionSourceName: "報導者"
    },
    {
        sectionTitle: "野島剛／3個原因，讓日本史無前例關注台灣地方大選",
        sectionContent: "野島剛曾任《朝日新聞》駐台記者，長期觀察東亞的政治歷史發展，在台灣採訪過各大黨領導人，2017年出版《台灣十年大變局》（日本版書名為《台灣是什麼》）。這次九合一大選，野島剛也來台觀選，《報導者》特別訪談了這位日本知台記者，由他的視角觀察此次選舉對台灣及日本的影響。以下訪談以第一人稱方式表述。",
        sectionSource: "https://www.twreporter.org/",
        sectionSourceName: "報導者"
    },
    {
        sectionTitle: "陳思豪／恐懼壓縮了同婚的公共討論空間",
        sectionContent: "此次公投案中最受矚目的挺同、反同公投大戰，結果出爐，由「下一代幸福聯盟」發起的3項愛家公投全都通過，且同意人數遠超過不同意人數。由「平權前夕．彩虹起義」發起的2項平權公投則未能通過門檻。（註：公投案的同意票超過不同意票，且有效同意票數超過投票權人數四分之一門檻，才能通過。）",
        sectionSource: "https://www.twreporter.org/",
        sectionSourceName: "報導者"
    },
    {
        sectionTitle: "以「有感」調查改變世界！非營利媒體ProPublica：我們的力量來自讀者",
        sectionContent: "非營利調查新聞網站ProPublica要邁入11年了，這家在美國知名、但台灣朋友不一定熟悉的美國網路媒體，已奪下4座普立茲獎與2座艾美獎，更在近期不斷成長，從成立之初的28個記者與編輯 ，成長到如今有86位編採人員，合作媒體多達162家。當主流媒體紛紛裁員、在流量主導下疲於奔命重量不重質，ProPublica究竟如何打破媒體業界的惡循環，它們怎麼活下來，又想建立怎麼樣的媒體生態？",
        sectionSource: "https://www.twreporter.org/",
        sectionSourceName: "報導者"
    },
];


class NavBtn extends React.Component {
    render() {
        return (
            <button type="button" className="navBtn" onClick={this.props.openList}>
                <img src={require("./menu.svg")} />  
            </button>
        );
    }
}

class NavList extends React.Component {    
    render() {
        return ( 
                <ul className="navList">
                    <img src={require("./white_exit.svg")} 
                        className="closeBtn" 
                        onClick={this.props.closeList} 
                        style={{display: window.innerWidth > 800 ? "none" : "block"}}
                        />
                        {this.props.navListItemName.map(item => 
                        <li className="navListItem"><a href="#">{item}</a></li>   
                        )}
                </ul>
        );
    }
}


class Header extends React.Component {
    state = {
        showList: false
    };

    openList = () => {
        this.setState({
            showList: true
        });
    }

    closeList = () => {
        this.setState({
            showList: false
        });
    }

    render() {
      return (
        <header>
          <nav className="navBar">
              <span className="name"> DEMO / </span>
              <img className="logo" src={require("./papre_plane.svg")} />
              <NavBtn openList={this.openList} />
              {
                  this.state.showList || window.innerWidth > 800 ?
                  <NavList 
                    navListItemName={navListItems} 
                    closeList={this.closeList} />
                  : null
              }
          </nav>
        </header>
      );
    }
  }
  
class Cover extends React.Component {
    state = {
        message: "Welcome Message"
    }

    coverClicked = () => {
        this.setState({
            message: "Have a Good Time!"
        });
    }

    render() {
        return (
        <div className="cover" onClick={this.coverClicked}>
            <h1 className="coverTitle">{this.state.message}</h1>
        </div>
        );
    }
  }

class FlexRow1 extends React.Component {
    render() {
        return (
            <div className="flexRow">
            {this.props.sectionInfo.slice(0, 2).map(section =>
                <div className="box">
                <h3 className="sectionTitle">{section.sectionTitle}</h3>
                <p>{section.sectionContent}</p>
                <p>文章來源：<a href={section.sectionSource}>{section.sectionSourceName}</a></p>
            </div>
            )}  
            </div>          
        );
    }
}

class FlexRow2 extends React.Component {
    render() {
        return (
            <div className="flexRow">
            {this.props.sectionInfo.slice(2, 4).map(section =>
                <div className="box">
                <h3 className="sectionTitle">{section.sectionTitle}</h3>
                <p>{section.sectionContent}</p>
                <p>文章來源：<a href={section.sectionSource}>{section.sectionSourceName}</a></p>
            </div>
            )}  
            </div>          
        );
    }
}

class FlexRow3 extends React.Component {
    render() {
        return (
            <div className="flexRow">
            {this.props.sectionInfo.slice(4, 6).map(section =>
                <div className="box">
                <h3 className="sectionTitle">{section.sectionTitle}</h3>
                <p>{section.sectionContent}</p>
                <p>文章來源：<a href={section.sectionSource}>{section.sectionSourceName}</a></p>
            </div>
            )}  
            </div>          
        );
    }
}

class FlexRow4 extends React.Component {
    render() {
        return (
            <div className="flexRow">
            {this.props.sectionInfo.slice(6, 8).map(section =>
                <div className="box">
                <h3 className="sectionTitle">{section.sectionTitle}</h3>
                <p>{section.sectionContent}</p>
                <p>文章來源：<a href={section.sectionSource}>{section.sectionSourceName}</a></p>
            </div>
            )}  
            </div>          
        );
    }
}

class Section extends React.Component {
    state = {
        showRow: false
    }

    openRow = () => {
        const currentState = this.state.showRow;
        this.setState({ showRow: !currentState });
    }

    render() {
      return (
        <section className="sectionContainer">
            <h2 className="sectionMainTitle">熱門文章</h2>
            <FlexRow1 sectionInfo={sections}/>
            <FlexRow2 sectionInfo={sections}/>
            <div className="flexRow">
                <button className="actionBtn" onClick={this.openRow}>Call to Action</button>
            </div>
            {
                this.state.showRow?
                <div>
                <FlexRow3 sectionInfo={sections} /> 
                <FlexRow4 sectionInfo={sections} />
                </div>
                : null   
            }           
        </section>
      );
    }
  }
  
class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Cover message="Welcome Message" />
                <Section />
            </div>
        );
    }
  }


ReactDOM.render(<App />, document.getElementById('root'));

