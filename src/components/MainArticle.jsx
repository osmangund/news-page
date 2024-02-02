import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledImage } from "./styles/Image.styled"

export default function MainArticle() {
  return (
    <MainArticle>
      <StyledImage src="mainarticle.jpg" alt="" maxw="1024px" maxh="320px" />
      <Flex gap="2.2rem">
        <div>
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button>Read more</Button>
        </div>
      </Flex>
    </MainArticle>
  )
}
