import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../styles/Book.css';

interface PageProps {
    number: number;
    children?: React.ReactNode;
}

const Page: React.FC<PageProps> = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                <h2>페이지 {props.number}</h2>
                {props.children}
            </div>
        </div>
    );
});

const Book: React.FC = () => {
    const book = useRef<any>(null);

    return (
        <div className="book-container">
            <HTMLFlipBook
                width={550}
                height={733}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                showCover={true}
                mobileScrollSupport={true}
                ref={book}
                className="demo-book"
                style={{}}
                startPage={0}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={1}
                useMouseEvents={true}
                clickEventForward={true}
                swipeDistance={0}
                showPageCorners={true}
                disableFlipByClick={false}
            >
                <Page number={1}>
                    <div className="page-content">
                        <h1>우리의 이야기</h1>
                        <p>첫 번째 페이지입니다.</p>
                    </div>
                </Page>
                <Page number={2}>
                    <div className="page-content">
                        <h2>추억 #1</h2>
                        <p>두 번째 페이지입니다.</p>
                    </div>
                </Page>
                <Page number={3}>
                    <div className="page-content">
                        <h2>추억 #2</h2>
                        <p>세 번째 페이지입니다.</p>
                    </div>
                </Page>
                <Page number={4}>
                    <div className="page-content">
                        <h2>마지막 페이지</h2>
                        <p>네 번째 페이지입니다.</p>
                    </div>
                </Page>
            </HTMLFlipBook>
        </div>
    );
};

export default Book;