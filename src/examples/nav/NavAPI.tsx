import React, { Component } from 'react';
import styles from "./code.module.scss";

export class NavAPI extends Component<{}, {}>
{
    render()
    {
        return (
            <div className={styles["WordSection1"]}>
                <table className={styles["MsoNormalTable"]} cellSpacing={0} cellPadding={0} style={{ width: '624.75pt', background: 'white', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <td style={{ border: 'solid #E8E8E8 1.0pt', borderBottom: 'solid #E8E8E8 1.5pt', background: '#FAFAFA', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                                <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: 'Consolas', color: '#5C6B77' }}>Property</span></p>
                            </td>
                            <td style={{ borderTop: 'solid #E8E8E8 1.0pt', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.5pt', borderRight: 'solid #E8E8E8 1.0pt', background: '#FAFAFA', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                                <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: 'Consolas', color: '#5C6B77' }}>Description</span></p>
                            </td>
                            <td style={{ borderTop: 'solid #E8E8E8 1.0pt', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.5pt', borderRight: 'solid #E8E8E8 1.0pt', background: '#FAFAFA', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                                <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: 'Consolas', color: '#5C6B77' }}>Type</span></p>
                            </td>
                            <td style={{ borderTop: 'solid #E8E8E8 1.0pt', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.5pt', borderRight: 'solid #E8E8E8 1.0pt', background: '#FAFAFA', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                                <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: 'Consolas', color: '#5C6B77' }}>Default</span></p>
                            </td>
                        </tr>
                    </thead>
                    <tbody><tr>
                        <td style={{ width: '124.5pt', border: 'solid #E8E8E8 1.0pt', borderTop: 'none', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                            <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: 'Consolas', color: '#003A8C' }}>links</span></p>
                        </td>
                        <td style={{ borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.0pt', borderRight: 'solid #E8E8E8 1.0pt', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                            <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: 'Consolas', color: '#314659' }}>the data source of nav, type of link
                    is ILink</span></p>
                        </td>
                        <td style={{ width: '137.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.0pt', borderRight: 'solid #E8E8E8 1.0pt', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                            <p className={styles["MsoNormal"]} style={{ textAlign: 'left', wordBreak: 'break-all' }}><span lang="EN-US" style={{ fontSize: '10.0pt', fontFamily: 'Consolas', color: '#C41D7F' }}>Arrar&lt;ILink&gt;</span></p>
                        </td>
                        <td style={{ width: '81.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.0pt', borderRight: 'solid #E8E8E8 1.0pt', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                            <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontSize: '9.0pt', fontFamily: 'Consolas', color: '#314659', background: '#F2F4F5' }}>[]</span></p>
                        </td>
                    </tr>
                        <tr>
                            <td style={{ width: '124.5pt', border: 'solid #E8E8E8 1.0pt', borderTop: 'none', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                                <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: 'Consolas', color: '#003A8C' }}>logoSrc</span></p>
                            </td>
                            <td style={{ borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.0pt', borderRight: 'solid #E8E8E8 1.0pt', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                                <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontFamily: 'Consolas', color: '#314659' }}>the path of logo</span></p>
                            </td>
                            <td style={{ width: '137.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.0pt', borderRight: 'solid #E8E8E8 1.0pt', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                                <p className={styles["MsoNormal"]} style={{ textAlign: 'left', wordBreak: 'break-all' }}><span lang="EN-US" style={{ fontSize: '10.0pt', fontFamily: 'Consolas', color: '#C41D7F' }}>string</span></p>
                            </td>
                            <td style={{ width: '81.0pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid #E8E8E8 1.0pt', borderRight: 'solid #E8E8E8 1.0pt', padding: '10.5pt 12.0pt 10.5pt 12.0pt' }}>
                                <p className={styles["MsoNormal"]} style={{ textAlign: 'left' }}><span lang="EN-US" style={{ fontSize: '9.0pt', fontFamily: 'Consolas', color: '#314659', background: '#F2F4F5' }}>-</span></p>
                            </td>
                        </tr>
                    </tbody></table>
            </div>
        );
    }
}