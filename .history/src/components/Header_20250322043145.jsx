import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"}>
          <img src="" alt="" />
        </Link>
      </h1>
      <div className="locaAndUser">
        <button></button>
        <button></button>
      </div>
      <div className="mobile_menu">
        <strong className="blind">메뉴 열기</strong>
        <button type="button" className="mmenu">
          <span className="buger"></span>
          <span className="buger"></span>
          <span className="buger"></span>
        </button>
      </div>
      <div className="searchAndWish">
        <button></button>
        <button></button>
      </div>
      <nav className="nav">
        <strong className="blind">메인 메뉴</strong>
        <ul className="gnb">
          <li className="d1">
            <Link to={"/product"}>제품보기</Link>
            <div className="pro_gnb_bg">
              <div className="pro_gnb_in">
                <ul className="pro_lnb">
                  <li className="pro_d2">
                    <Link to={"/product"}>
                      <p>조용히 더 가까이</p>
                      <dl>
                        <dt>라이카 M</dt>
                        <dd>시그니처 레인지파인더 카메라</dd>
                      </dl>
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/product"}>Leica M11</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Leica M6</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Leica M</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>M Lenses</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>M Accessories</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="pro_d2">
                    <Link to={"/product"}>
                      <p>사진과 동영상, 포기할 수 없는 선택</p>
                      <dl>
                        <dt>라이카 SL</dt>
                        <dd>하이브리드 카메라</dd>
                      </dl>
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/product"}>Leica SL3</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Leica SL2</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>SL Lenses</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>SL Accessories</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="pro_d2">
                    <Link to={"/product"}>
                      <p>다양한 순간에도 오차없이 완벽하게</p>
                      <dl>
                        <dt>라이카 Q</dt>
                        <dd>하이엔드 풀프레임 카메라</dd>
                      </dl>
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/product"}>Leica Q3</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Leica Q2</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Leica Q-P</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Q Accessories</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="pro_d2">
                    <Link to={"/product"}>
                      <p>크기는 작게, 성능은 그대로</p>
                      <dl>
                        <dt>컴팩트 카메라</dt>
                        <dd>엔트리 카메라</dd>
                      </dl>
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/product"}>D-Lux8</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>D-Lux7</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>V-Lux5</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Compact Accessories</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="pro_d2">
                    <Link to={"/product"}>
                      <p>고품질 미니멀 디자인</p>
                      <dl>
                        <dt>라이카 소포트</dt>
                        <dd>하이브리드 즉석카메라</dd>
                      </dl>
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/product"}>Sofort</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Sofort Accessories</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="pro_d2">
                    <Link to={"/product"}>
                      <p>타임리스한 정확함</p>
                      <dl>
                        <dt>라이카 워치</dt>
                        <dd>시간을 포착하다</dd>
                      </dl>
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/product"}>Leica Watch</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="pro_d2">
                    <Link to={"/product"}>
                      <p>사진이 아닌 눈으로 경험</p>
                      <dl>
                        <dt>스포츠 옵틱스</dt>
                        <dd>컴팩트 쌍안경</dd>
                      </dl>
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/product"}>ULTRAVID</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>NOCTIVID</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>MONOVID</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>TRINOVID</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>PINMASTER</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="pro_d2">
                    <Link to={"/product"}>
                      <p>안전 거래 보장</p>
                      <dl>
                        <dt>세컨드 핸드</dt>
                        <dd>원스톱 서비스</dd>
                      </dl>
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/product"}>매입 안내</Link>
                        <Link to={"/product"}>판매 제품</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="pro_all">
                  <dl>
                    <dt>모든 제품</dt>
                    <dd>라이카 카메라 한눈에 보기</dd>
                  </dl>
                </div>
              </div>
            </div>
          </li>
          <li className="d1">
            <Link to={"/second-hand"} className="gnb_link">
              세컨드핸드
            </Link>
            <div className="gnb_bg">
              <div className="gnb_in">
                <ul className="lnb">
                  <li className="d2">
                    <Link to={"/second-hand"}>매입 안내</Link>
                    <Link to={"/second-hand"}>제품 목록</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="d1">
            <Link to={"/world"}>라이카월드</Link>
            <div className="gnb_bg">
              <div className="gnb_in">
                <ul className="lnb">
                  <li className="d2">
                    <Link to={"/world"}>라이카 전시</Link>
                    <Link to={"/world"}>온라인 갤러리</Link>
                    <Link to={"/world"}>라이카 스토리</Link>
                    <Link to={"/world"}>브랜드 소개</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="d1">
            <Link to={"/akademie"}>아카데미</Link>
            <div className="gnb_bg">
              <div className="gnb_in">
                <ul className="lnb">
                  <li className="d2">
                    <Link to={"/akademie"}>라이카 아카데미 소개</Link>
                    <Link to={"/akademie"}>아카데미 일정</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="d1">
            <Link to={"/customer"}>고객지원</Link>
            <div className="gnb_bg">
              <div className="gnb_in">
                <ul className="lnb">
                  <li className="d2">
                    <Link to={"/customer"}>공지사항</Link>
                    <Link to={"/customer"}>제품등록</Link>
                    <Link to={"/customer"}>매장 방문 예약</Link>
                    <Link to={"/customer"}>다운로드</Link>
                    <Link to={"/customer"}>자주 하는 질문(FAQ)</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div>
        <Link to={"/"}>제품등록</Link>
        <Link to={"/"}>PRO-MEMBERSHIP</Link>
      </div>
    </header>
  );
};

export default Header;
