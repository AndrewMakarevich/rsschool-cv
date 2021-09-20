import { useContext } from 'react';
import { Context } from '..';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/shadesOfPurple';
import './codeExample.css';



const CodeExamples = () => {
    const { code } = useContext(Context);
    return (
        <section className="codeExample" >
            <h2 id="Code examples" className="codeExample-header">Code examples</h2>
            <section className="codeExample-list">
                {
                    code.codeInfo.map(code => {
                        return (
                            <article key={code.id} className="codeExample-list__item">
                                <h2 className="codeExample-list__item__header">{code.title}</h2>
                                <div className="codeExample-list__item__description">{code.description}</div>
                                <Highlight  {...defaultProps} theme={theme} code={code.example} language="jsx">
                                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                        <pre className="codeExample-list__item__example" style={style}>
                                            {tokens.map((line, i) => (
                                                <div key={i} {...getLineProps({ line, i })}>
                                                    {line.map((token, key) => (
                                                        <span {...getTokenProps({ token, key })} />
                                                    ))}
                                                </div>
                                            ))}
                                        </pre>
                                    )}
                                </Highlight>

                            </article>
                        )
                    })
                }
            </section>
        </section>



    )
};
export default CodeExamples;