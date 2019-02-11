import React, { Component } from 'react';
import styles from "./code.module.scss";

export class NestedCode extends Component<{}, {}>
{
    render()
    {
        return (
            <div className={styles["WordSection1"]} >
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>&lt;</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#F81D22' }}>div</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>&gt;</span></p>
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#314659', background: 'white' }}>&nbsp;&nbsp;&nbsp; </span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>&lt;</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#F81D22' }}>List</span></p>
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#314659', background: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>items</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>=</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>{'{'}[</span></p>
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#314659', background: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>{'{'}</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>text</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}><span style={{ fontVariantLigatures: 'normal', fontVariantCaps: 'normal', orphans: 2, widows: 2, WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', wordSpacing: '0px' }}>Components</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span>, </span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>key</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}><span style={{ fontVariantLigatures: 'normal', fontVariantCaps: 'normal', orphans: 2, widows: 2, WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', wordSpacing: '0px' }}>components</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span></span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>{'}'},</span></p>
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#314659', background: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>{'{'}</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>text</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}><span style={{ fontVariantLigatures: 'normal', fontVariantCaps: 'normal', orphans: 2, widows: 2, WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', wordSpacing: '0px' }}>Button</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span>, </span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>key</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}><span style={{ fontVariantLigatures: 'normal', fontVariantCaps: 'normal', orphans: 2, widows: 2, WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', wordSpacing: '0px' }}>button</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span>,</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}> nested</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}>true</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>{'}'},</span></p>
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#314659', background: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>{'{'}</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>text</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}><span style={{ fontVariantLigatures: 'normal', fontVariantCaps: 'normal', orphans: 2, widows: 2, WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', wordSpacing: '0px' }}>List</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span>, </span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>key</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}><span style={{ fontVariantLigatures: 'normal', fontVariantCaps: 'normal', orphans: 2, widows: 2, WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', wordSpacing: '0px' }}>list</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span>,</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}> nested</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}>true</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}> {'}'},</span></p>
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#314659', background: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>{'{'}</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>text</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}><span style={{ fontVariantLigatures: 'normal', fontVariantCaps: 'normal', orphans: 2, widows: 2, WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', wordSpacing: '0px' }}>Nav</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span>, </span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>key</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}><span style={{ fontVariantLigatures: 'normal', fontVariantCaps: 'normal', orphans: 2, widows: 2, WebkitTextStrokeWidth: '0px', textDecorationStyle: 'initial', textDecorationColor: 'initial', wordSpacing: '0px' }}>nav</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>"</span>,</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}> nested</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>:</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#008DFF' }}>true</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}> {'}'}</span></p>
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#314659', background: 'white' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>]{'}'}</span></p>
                <p className={styles["MsoNormal"]}  style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#314659', background: 'white' }}>&nbsp;&nbsp;&nbsp; </span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#0B8235' }}>/&gt;</span></p>
                <p className={styles["MsoNormal"]}><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>&lt;/</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#F81D22' }}>div</span><span lang="EN-US" style={{ fontFamily: '"Lucida Console"', color: '#999999' }}>&gt;</span></p>
            </div>
        );
    }
}