import styled, { css, createGlobalStyle } from 'styled-components'

const PrintGlobalStyles = createGlobalStyle`
  @media print {
    @page {
      margin: 10mm 5mm;
    }
    body {
      header[class*="HeaderWrapper"] {
        display: none !important;
      }
      section {
        padding: 0 !important;
      }
    }
`

const printBodyTextStyles = css`
  h5 {
    font-size: 11pt;
    line-height: 1.5;
    margin: 0;
    orphans: 2;
    widows: 2;
  }
  li,
  p {
    font-size: 9pt;
    line-height: 1.25;
    margin: 0;
  }
`

const ResumeWrapper = styled.div`
  position: relative;
  margin-top: ${props => props.theme.mixins.remCalc(100)};
  ${props => props.theme.minMedia.md`
    margin-top: ${props.theme.mixins.remCalc(50)};
  `}
  @media print {
    margin: 0;
  }
`

const ResumeHeader = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 120px;
  grid-gap: ${props => props.theme.gutter.grid};
  margin-bottom: ${props => props.theme.mixins.remCalc(20)};
  h1 {
    font-weight: 900;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: right;
    li {
      font-size: ${props => props.theme.mixins.remCalc(12)};
      font-weight: 600;
      line-height: 2;
      margin: 0;
      padding: 0;
    }
  }
  ${props => props.theme.minMedia.md`
    margin-bottom: ${props.theme.mixins.remCalc(60)};
    li {
      line-height: 1.5;
    }
  `}

  @media print {
    grid-template-columns: 1fr 2in;
    margin: 0;
    h1 {
      font-size: 15pt;
      line-height: 2;
    }
    ul {
      li:first-child {
        display: inline-block;
        a:after {
          content: 'yo@arturoalviar.com';
          display: inline;
          padding-left: 1.5mm;
        }
      }
      li:not(:first-child) {
        display: none;
      }
    }
  }
`

const ResumeGrid = styled.div`
  ${props => props.theme.minMedia.md`
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-gap: ${props.theme.gutter.grid};
  `}
  @media print {
    display: grid;
    grid-template-columns: 1fr 2in;
    grid-gap: 1mm;
  }
`

const ResumeBlock = styled.div`
  h3 {
    font-size: ${props => props.theme.mixins.remCalc(24)};
    font-weight: 700;
    margin-bottom: ${props => props.theme.mixins.remCalc(10)};
    ${props => props.theme.minMedia.md`
      font-size: ${props => props.theme.mixins.remCalc(28)};
    `}
  }

  h5 {
    font-weight: 400;
    margin-bottom: 0.35rem;
    position: relative;
  }

  ul {
    list-style-position: outside;
    padding: 0 20px;
    li {
      line-height: 1.6;
    }
  }

  @media print {
    h3 {
      font-size: 13pt;
      line-height: 1.6;
      margin-bottom: 0;
    }
    ${printBodyTextStyles}
  }

  .resume-item-project {
    h5 {
      font-weight: bold;
    }
    ${props => props.theme.minMedia.md`
      p {
        font-size: ${props.theme.mixins.remCalc(14)};
      }
    `}
    @media print {
      ${printBodyTextStyles}
      h5 {
        line-height: 1.8;
      }
    }
  }

  .resume-item-subheading {
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.mixins.remCalc(12)};
    font-weight: 600;
    margin-bottom: ${props => props.theme.mixins.remCalc(14)};
    @media print {
      font-size: 8pt;
      margin: 0;
    }
  }
`

const ResumeSkill = styled.span`
  background: ${props => props.theme.colors.lightGray};
  font-size: ${props => props.theme.mixins.remCalc(12)};
  font-weight: bold;
  display: inline-flex;
  margin-left: -5px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  @media print {
    background: none;
    font-size: 8pt;
    padding: 0;
    margin: 0;
    padding-right: 1.5mm;
    line-height: 1;
    &:not(:last-of-type) {
      &:after {
        content: ',';
      }
    }
  }
`

export {
  ResumeWrapper,
  ResumeGrid,
  ResumeHeader,
  ResumeBlock,
  ResumeSkill,
  PrintGlobalStyles,
}
