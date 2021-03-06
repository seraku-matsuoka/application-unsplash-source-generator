import { useState } from 'react';
import './scss/App.scss';

function App() {
    const [url, setUrl] = useState('入力してください');
    const handleUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        let changedUrl: string = e.target.value.replace('https://', 'https://source.');
        changedUrl = changedUrl.replace('photos/', '');
        setUrl(changedUrl);
    };

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text).then(
            function () {
                console.log('Async: Copying to clipboard was successful!');
            },
            function (err) {
                console.error('Async: Could not copy text: ', err);
            }
        );
    };

    return (
        <div className="App">
            <header className="l-header">
                <div className="l-header__logo">USG</div>
            </header>
            <main className="l-main">
                <section className="p-mv">
                    <h1 className="p-mv__title">Unsplash Source Generator</h1>
                    <p className="p-mv__description">以下のテキストボックスに入力したUnsplashの画像URLを "source.～" のかたちに整形します。</p>
                </section>
                <section className="p-input">
                    <div className="p-input__text-box">
                        <input onChange={handleUrl} />
                    </div>
                    {url === '' ? <p className="p-input__changed-url">入力してください</p> : <p className="p-input__changed-url">{url}</p>}
                    <button onClick={() => copyText(url)}>Copy</button>
                </section>
            </main>
            <footer className="l-footer">Created by Vite React-ts</footer>
        </div>
    );
}

export default App;
