import { bottomArticles } from "../articleContent"
import Article from "./Article"
import { BottomArticlesSection } from "./styles/BottomArticles.styled"
import { Flex } from "./styles/Flex.styled"

export default function BottomArticles() {
  return (
    <BottomArticlesSection>
      <Flex>
        {bottomArticles.map((item) => (
          <Article key={item.id} item={item} />
        ))}
      </Flex>
    </BottomArticlesSection>
  )
}
