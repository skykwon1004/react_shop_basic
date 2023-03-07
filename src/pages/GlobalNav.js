import { Link } from "react-router-dom";

const GlobalNav = ({ NAV }) => {
    return (
        <ul>
            {
                NAV.map(it => {
                    return (
                        <li key={it.id}>
                            <Link to={it.link}>{it.title}</Link>
                            {it.submenu ? <ul>

                                {
                                    it.submenu?.map((it, idx) => {
                                        return (
                                            <li key={idx}><Link to={it.link}>{it.title}</Link></li>
                                        )
                                    })
                                    // submenu가 있는것도 있고 없는것도 있어서 submenu? 이렇게 submenu가 있으면으로 실행하고 없으면 안한다 뜻 이렇게 바꾼다
                                    // submenu에 key 값 할만한게 없을때는 submenu.map의 idx를 받아와서 넣는다
                                }
                            </ul> : null}

                            {/* {it.submenu && <ul>
                                {
                                    it.submenu.map((it, idx) => {
                                        return (
                                            <li key={idx}><Link to={it.link}>{it.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>} 
                            &&써서 쓰면 이렇게 된다
                            */ }

                        </li>
                    )
                })
            }
        </ul>
    )
}

//conponents
{/* <Aside toggle={loginOn}>
	안녕하세요
</Aside>
//style
export const Aside = styled.aside`
    position:fixed;
    right:0;
    top:0; 
    z-index:9;
    width:50vw;
    height:100%;
    padding:2rem;
    background:#fff;
    transform:${props=>(props.toggle ? 'translateX(0)': 'translateX(100%)')};
    transition:all .5s ease;
    box-sizing:border-box;
`
   */}

export default GlobalNav;