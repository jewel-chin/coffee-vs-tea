const ComparisonProductionPieSVG = ()=>{

    return(
    <div style={{position:'relative', transform:'scale(0.4)',marginTop:'160px'}}>
    <h2 style={{position:'absolute',left:'22%',top:'10%', fontSize:'5em'}}>☕</h2>
    <h2 style={{position:'absolute',left:'50%',top: '30%', fontSize:'5em'}}>🍵</h2>
    <svg width="960" height="600">
    <path fill="#522A08" d="M128.843 428.351A300 300 0 0 1 400 0v300Z" class="arc coffee 225734.82"/>
    <path fill="#768731" d="M400 0a300 300 0 1 1-271.157 428.351L400 300Z" class="arc tea 478888.619"/>
    </svg>
    <div style={{fontSize:'2em',color:'black',position:'absolute',right:'8%',bottom:'100%',display:'flex',flexDirection:'column',backgroundColor:'#FAf9f6'}}>
        <span>☕ : Coffee, 226,000 Mt*</span>
        <span>🍵 : Tea, 480,000 Mt*</span>
        <span style={{fontSize:'0.8em'}}><i>* Mt: Million Tonnes</i></span>
    </div>
    



    </div>
    )
}
export default ComparisonProductionPieSVG;