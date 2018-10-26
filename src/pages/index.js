import React, { Component } from 'react';
import Link from 'gatsby-link';
import Orange from './Orange';

const AboutSection = () => (
    <div>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
);

class IndexPage extends Component {
    state = {
        isOrangeRoofed: false,
    };

    onOrangeClick = () =>
        this.setState({ isOrangeRoofed: !this.state.isOrangeRoofed });

    render() {
        const { isOrangeRoofed } = this.state;
        // 4rem per column
        return (
            <div className={`grid ${!isOrangeRoofed ? 'fade-out' : ''}`}>
                <div className="orange-container">
                    <Orange
                        alt="Orange"
                        onClick={this.onOrangeClick}
                        style={{
                            cursor: 'pointer',
                            transform: isOrangeRoofed
                                ? 'translateY(-25vh)'
                                : 'translateY(25vh)',
                            transition:
                                'transform 0.2s ease-in-out, filter 0.1s ease-out',
                            width: '100%',
                        }}
                    />
                </div>
                <h1 className="serif masthead">
                    Mattias Prada
                </h1>
                <img src={require('./lang-icons.svg')} className="lang-icons"/>
                <h2 className="sans full-stack">Full stack developer</h2>
                <div className="serif copy-container welcome">
                    <p>We had entered the clouds.</p>
                    <p>For half-an-hour we were muffled in a cold, damp mist, and total darkness, and had begun to think of going indoors when, all at once, the car burst into the pure and starlit region of the upper air.</p>
                    <p>A cry of joyous admiration escaped from us all.</p>
                    <p>"How beautiful!" exclaimed Miss Carmichael, in a solemn whisper, as if she were afraid that angels might hear. "The atmosphere, too, is often very impure," I replied, also in a whisper. "I say, Miss Carmichael! Won't you come and take a look at Venus?" Then I whispered into space.</p>
                    <p>"There is Venus right ahead," cried the astronomer, but in a softer tone than usual, perhaps out of respect for the sovereign laws of the universe. "The course is clear now--we are fairly on the open sea--I mean the open ether. I must get out my telescope."</p>
                    <p>The spectacle before us was indeed sublime.</p>
                </div>
                <p className="sans side welcome">1. Welcome</p>
                <div className="serif copy-container about">
                    <p>The sky of a deep dark blue was hung with innumerable stars, which seemed to float in the limpid ether, and the rolling vapours through which we had passed were drawn like a sable curtain between us and the lower world. The stillness was so profound that we could hear the beating of our own hearts.</p>
                    <p>"How beautiful!" exclaimed Miss Carmichael, in a solemn whisper, as if she were afraid that angels might hear. "The atmosphere, too, is often very impure," I replied, also in a whisper. "I say, Miss Carmichael! Won't you come and take a look at Venus?" Then I whispered into space.</p>
                    <p>"There is Venus right ahead," cried the astronomer, but in a softer tone than usual, perhaps out of respect for the sovereign laws of the universe. "The course is clear now--we are fairly on the open sea--I mean the open ether. I must get out my telescope."</p>
                </div>
                <p className="sans side about">2. About</p>
                <div className="space bg"/>
                <img src={require('./starfield.svg')} className="space starfield"/>
                <div className="serif copy-container space">
                    <p>The sky of a deep dark blue was hung with innumerable stars, which seemed to float in the limpid ether, and the rolling vapours through which we had passed were drawn like a sable curtain between us and the lower world. The stillness was so profound that we could hear the beating of our own hearts.</p>
                </div>
                <p className="sans side space">3. Space</p>

            </div>
        );
    }
}

export default IndexPage;
