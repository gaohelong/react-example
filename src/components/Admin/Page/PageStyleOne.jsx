import React from 'react';

/* component */
import PageItem from './PageItem';

class PageStyleOne extends React.Component {
    render() {
        console.log('PageStyleOne: render');
        const { cutPage, totalCnt, pageSize } = this.props.pageParams;
        const pageTotal = Math.ceil(totalCnt / pageSize);
        let i = 1;
        let pageArr = [];
        for (; i <= pageTotal; ++i) {
            pageArr.push(i);
        }

        let pageHtml = pageArr.map((val) => {
            let key = 'page-' + val;
            return <PageItem key={key} cutPage={cutPage} totalCnt={totalCnt} pageTotal={pageTotal} page={val} pageClickHandle={this.props.pageClickHandle} />;
        });

        return (
            <div className="hl-pageS1">
                {pageHtml}
            </div>
        );
    }
}

export default PageStyleOne;
