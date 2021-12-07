import React,{ useEffect } from 'react';

function NavHead(props) {

    const { contents, ...args } = props;

    const style = {
        width: args.width||'100%', height: args.height||'40px', backgroundColor: args.background||'#f2c246',
        display: 'flex',position: 'relative', color: args.color||"#fff",
        alignItems: 'center',padding: '0 2%',
        boxSizing:'borderBox',borderRadius: '5px 5px 0 0'
    };

    const mouseEventHandler = (e)=>{
        e.currentTarget.parentNode.childNodes.forEach(v=>{v.classList.remove('NAV_icon')});
        e.currentTarget.classList.add('NAV_icon');
        if(args.handleEvent) args.handleEvent(e.currentTarget.dataset.index);
    };

    const createStyle = (bool=false)=>{
        if(!bool){
            let styleCode = document.createElement('style');
            styleCode.innerText = `.NAV_content { display: flex; position: relative; align-items: center; height: 100%; margin: 0 8px; font-size: 14px; white-space: nowrap; cursor: pointer;}`+
                `.NAV_icon::after { content: ""; position: absolute; left: 50%; bottom: -0.5px; transform: translate(-50%,0);
                                                border: 6px solid; border-color: transparent transparent ${args.iconColor||'#fff'} transparent; }`;
            document.head.appendChild(styleCode);
            window.hasNAV_content = true;
        }
    };

    useEffect(()=>{
        createStyle(window.hasNAV_content);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div style={style}>
            <h2 style={{margin: '0', fontSize: args.titleSize||'17px', color: args.titleColor||args.color||"#fff"}}>{args.title}</h2>
            <ul style={{display: 'flex', height: '100%', alignItems: 'center', margin: '0 0 0 -2%'}}>
                {
                    contents ? contents.map((value,index)=>(
                    <li
                        className={index===0?'NAV_content NAV_icon':'NAV_content'}
                        key={value} data-index={index}
                        onMouseOver={!args.click&&mouseEventHandler}
                        onClick={args.click&&mouseEventHandler}
                    >
                        {value}
                    </li>
                )):''
                }
            </ul>
            <a href={args.moreUrl||'#'} style={{display: args.moreHidden?'none':'block', position: 'absolute', right: '2%', color: args.color||`#fff`}}>{args.moreText||'全部'}&nbsp;></a>
        </div>
    );
}

export default NavHead;

/*
* 参数
    color--文字颜色
    background--背景颜色
    titleSize--标题大小
    titleColor--标题颜色
    title--标题
    contents--中间标签内容(数组)
    contentClass--每个标签样式
    click--是否点击事件(默认flase)
    iconColor--底部三角颜色
    moreHidden--是否显示右侧链接
    moreText--右侧url连接文字内容
    moreUrl--点击右侧跳转(url)
    handleEvent--鼠标接触或点击事件(index=>{console.log(index)})
*/
