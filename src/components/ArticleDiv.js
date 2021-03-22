import styled from 'styled-components';

const ArticleDiv = styled.div`
  h1 {
    font-size: 55px;
  }

  h2, blockquote {
    font-size: 34px;
  }

  blockquote { text-align: center; }
  blockquote:before { content: '"'; }
  blockquote:after { content: '"'; }

  p, div, strong{
    font-size: 21px;
  }

  small{
    font-size: 13px;
  }
`;

export default ArticleDiv;