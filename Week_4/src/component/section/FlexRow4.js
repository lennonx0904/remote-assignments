import React from 'react';

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

export default FlexRow4;