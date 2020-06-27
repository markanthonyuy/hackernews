import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import FauxBlock from './FauxBlock'
import { getUserData } from '../utils'
import { useState } from 'react'

const AUTHOR = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 640 640"
  >
    <path d="M-.012 636.22L0 533.994c54.71-24.331 222.133-70.63 230.034-137.576 1.795-15.118-33.863-72.71-42.024-100.336-17.48-27.874-23.752-72.13-4.618-101.588 7.606-11.705 4.358-54.379 4.358-70.49 0-160.265 280.834-160.324 280.834 0 0 20.28-4.665 57.521 6.343 73.455 18.425 26.646 8.905 73.89-6.603 98.623-9.945 29.032-47.811 83.895-44.575 100.336C435.773 457.564 591.1 498.644 640.012 520.4L640 636.209l-640.012.012z" />
  </svg>
)

const POINTS = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 2505 3333"
  >
    <path d="M2413 3067l-313-56-155 278c-113 140-184-90-216-170l-302-570c70-24 154-94 240-172 172 4 333-26 451-177l348 672 30 64c24 84 11 139-82 131zM1252 0c59-3 105 18 152 48 59 38 126 112 209 159 116 66 332-25 442 139 64 96 67 170 72 244 5 80 19 153 101 261 135 179 163 298 94 422-48 85-148 132-171 185-49 114 5 200-62 333-47 92-119 153-215 184-81 26-163-12-228 16-114 48-198 159-289 188-35 11-70 16-105 16s-70-5-105-16c-91-28-175-140-289-188-65-27-146 10-228-16-96-31-169-92-215-184-67-133-13-219-62-333-23-54-123-101-171-185-70-124-42-243 94-422 82-108 96-182 101-261 5-74 8-149 72-244 110-164 326-72 442-139 83-47 150-122 209-159 47-30 93-50 152-48zm-191 971l142 135 244-248c24-24 39-44 69-14l97 99c32 31 30 50 0 79l-354 348c-63 62-52 66-116 2l-243-242c-13-14-12-29 3-44l112-116c17-18 30-16 48 0zm191-531c363 0 657 294 657 657s-294 657-657 657-657-294-657-657 294-657 657-657zM91 3067l313-56 155 278c113 140 184-90 216-170l302-570c-70-24-154-94-240-172-172 4-333-26-451-177L38 2872l-30 64c-24 84-11 139 82 131z" />
  </svg>
)

const COMMENTS = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 2899 3333"
  >
    <path d="M1075 1752c-40 0-72-38-72-85s32-85 72-85h947c40 0 72 38 72 85s-32 85-72 85h-947zm194 1410c47 0 85 38 85 85s-38 85-85 85H199c-55 0-105-22-141-58s-58-86-58-141V198C0 143 22 93 58 57S144-1 199-1h2442c55 0 105 22 141 58s58 86 58 141v1360c0 47-38 85-85 85s-85-38-85-85V198c0-8-3-15-8-20s-12-8-20-8H200c-8 0-15 3-20 8s-8 12-8 20v2935c0 8 3 15 8 20s12 8 20 8h1070zm1409-1146c-14-13-30-20-48-19-18 0-34 7-47 21l-106 110 297 287 107-112c13-13 18-30 18-48s-7-35-20-47l-201-192zm-556 1076c-39 13-79 25-118 38s-78 26-118 39c-93 30-144 47-155 50s-4-40 19-130l74-283 558-580 297 286-557 580zm-1047-734c-40 0-72-39-72-87s32-87 72-87h466c40 0 72 39 72 87s-32 87-72 87h-466zm0-1212c-40 0-72-38-72-85s32-85 72-85h947c40 0 72 38 72 85s-32 85-72 85h-947zM664 2155c56 0 101 45 101 101s-45 101-101 101-101-45-101-101 45-101 101-101zm0-597c56 0 101 45 101 101s-45 101-101 101-101-45-101-101 45-101 101-101zm0-597c56 0 101 45 101 101s-45 101-101 101-101-45-101-101 45-101 101-101z" />
  </svg>
)

const NEW_TAB = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="11">
    <path d="M41.28 10.323h178.774l73.052 82.466H115.194c-17.61 0-32.02 14.41-32.02 32.02v401.403c0 17.598 14.41 32.02 32.02 32.02h406.328c17.61 0 32.02-14.422 32.02-32.02v-181.62l83.174 69.19v185.624c0 22.7-18.567 41.28-41.28 41.28H41.28c-22.712 0-41.28-18.58-41.28-41.28V51.604c0-22.702 18.568-41.28 41.28-41.28zM640-.685L311.378 13.843l104.801 104.8-230.755 230.744 101.21 101.21 230.755-230.755 106.82 106.82L640-.685z" />
  </svg>
)

const TIME = () => (
  <svg
    width="12"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3299 3299"
  >
    <path d="M1650 0c456 0 868 185 1166 483 299 299 483 711 483 1166 0 456-185 868-483 1166-299 299-711 483-1166 483-456 0-868-185-1166-483C185 2516 1 2104 1 1649c0-456 185-868 483-1166C783 184 1195 0 1650 0zm-68 769c0-50 40-90 90-90s90 40 90 90v833l627 372c43 25 57 81 32 123-25 43-81 57-123 32l-667-395c-29-15-49-45-49-80V769zm1107-159c-266-266-633-430-1039-430S877 344 611 610s-430 633-430 1039 164 773 430 1039 633 430 1039 430 773-164 1039-430 430-633 430-1039-164-773-430-1039z" />
  </svg>
)

const MAIN_COLOR = '#624ed0'

const ListBody = styled.div`
  padding: 10px;
  background: #fff;

  > .list {
    margin-bottom: 3px;
    display: flex;
    background: #fff;
    /* border-radius: 10px; */
    /* box-shadow: 0 3px 5px #ccc; */
    transition: all 0.1s ease-out;

    &:nth-child(even) {
      background: #f9f9ff;
    }

    &:hover {
      background: #ebebff;

      > .num {
        background: ${MAIN_COLOR};
      }

      > .text {
        padding: 10px;

        > .meta {
          > span {
            color: ${MAIN_COLOR};

            > svg {
              fill: ${MAIN_COLOR};
            }
          }
        }
      }
    }

    > .num {
      width: 50px;
      padding: 13px 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      /* border-top-left-radius: 10px;
      border-bottom-left-radius: 10px; */
      font-size: 18px;
      background: #8f82d8;
      color: #fff;
      transition: all 0.1s ease-out;
    }

    > .text {
      width: calc(100% - 50px);
      min-height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;

      > .title {
        margin-bottom: 8px;
        font-size: 26px;
        line-height: 28px;

        @media (max-width: 600px) {
          font-size: 18px;
          line-height: 22px;
        }

        > a {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          color: ${MAIN_COLOR};
          text-decoration: none;
          font-weight: 300;

          > span {
            width: calc(100% - 25px);
          }

          > svg {
            margin-top: 5px;
            fill: ${MAIN_COLOR};
          }
        }
      }

      > .sub-text {
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 22px;
        word-break: break-word;

        > p {
          line-height: 22px;
          font-size: 14px;
        }
      }

      > .show-all {
        width: 110px;
        margin: 0 0 10px;
        padding: 5px;
        display: inline-block;
        text-align: center;
        font-size: 13px;
        cursor: pointer;
        background: #f0eeff;
      }

      > .meta {
        display: flex;
        font-size: 13px;

        @media (max-width: 600px) {
          margin-top: 10px;
          font-size: 14px;
          flex-wrap: wrap;
        }

        > span {
          margin: 0 5px;
          display: flex;
          align-items: center;
          color: #333;
          font-weight: 300;

          @media (max-width: 600px) {
            width: 50%;
            margin: 0;
            padding: 2px 0;
          }

          &:first-child {
            margin-left: 0;
          }

          > svg {
            margin: 0 5px;
            fill: #aaa;

            @media (max-width: 600px) {
              margin-left: 0;
            }

            &:first-child {
              margin-left: 0;
            }
          }
        }

        > .sep {
          @media (max-width: 600px) {
            display: none;
          }
        }
      }
    }
  }
`

const Popup = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  background: #f8f7ff;
`

const List = ({ currentData, renderNumber, page, noLink = false, loading }) => {
  const generateFauxBlocks = () => {
    let faux = []
    for (let i = 0; i < 12; i++) {
      faux.push(<FauxBlock key={`faux-${i}`} />)
    }

    return faux
  }

  const ellipsis = (txt) => {
    let data = txt.split(' ')
    if (data.length < 50) return data.join(' ')

    return data.slice(0, 50).join(' ') + ' ...'
  }

  const showAll = (e, txt) => {
    e.target.previousSibling.innerHTML = txt
    e.target.remove()
  }

  return (
    <>
      <ListBody>
        {!loading
          ? currentData.map((_, key) => (
              <div className="list" key={_.id}>
                <span className="num">
                  {renderNumber && key + 1 + (page - 1) * 30}
                </span>
                <div className="text">
                  <p className="title">
                    <a href={_.url} target="_blank" title="Open New Tab">
                      <span>{_.title}</span>
                      {!noLink && <NEW_TAB />}
                    </a>
                  </p>
                  {_.text && (
                    <>
                      <div
                        className="sub-text"
                        dangerouslySetInnerHTML={{
                          __html: ellipsis(_.text),
                        }}
                      />
                      {_.text.split(' ').length > 50 ? (
                        <span
                          onClick={(e) => showAll(e, _.text)}
                          className="show-all"
                        >
                          Show All Text
                        </span>
                      ) : (
                        ''
                      )}
                    </>
                  )}
                  <div className="meta">
                    <span title="Author" onClick={() => getUserData(_.by)}>
                      <AUTHOR /> {_.by}
                    </span>
                    <span className="sep">|</span>
                    <span title="Posted">
                      <TIME /> <TimeAgo date={_.time * 1000} />
                    </span>
                    <span className="sep">|</span>
                    <span title="Points">
                      <POINTS /> {_.score}
                    </span>
                    {_.descendants ? (
                      <>
                        <span className="sep">|</span>
                        <span title="Comments">
                          <COMMENTS /> {_.descendants}
                        </span>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            ))
          : generateFauxBlocks().map((el) => el)}
      </ListBody>
    </>
  )
}

export default List
