import { ArticleNumber, StyledArticle } from "./styles/Article.styled"

import PropTypes from "prop-types"
import { Flex } from "./styles/Flex.styled"
import { StyledImage } from "./styles/Image.styled"

export default function Article({
  item: { id, title, body, image, alt, showId = false, bg },
}) {
  return (
    <StyledArticle bg={bg && bg}>
      <Flex>
        {image && <StyledImage src={image} alt={alt} />}
        <div>
          {showId && <ArticleNumber>{String(id).padStart(2, 0)}</ArticleNumber>}
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </Flex>
    </StyledArticle>
  )
}

Article.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    image: PropTypes.string,
    alt: PropTypes.string,
    bg: PropTypes.string,
    showId: PropTypes.bool,
  }).isRequired,
}
