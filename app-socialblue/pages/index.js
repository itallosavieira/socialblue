import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const GridBox = styled.main`
	display: grid;
	grid-gap: 10px;
	padding: 16px;

	@media(min-width: 860px) {
		grid-template-areas: "profileArea welcomeArea communityArea";
		grid-template-columns: 160px 1fr 312px;
	}
`;

const Box = styled.div `
	background-color: #FFFFFF;
	border-radius: 8px;
`;

export default function Home() {
  return (
	<GridBox>
		<div>
			<Box style={{ gridArea: 'profileArea' }}>
				profile
			</Box>
		</div>
		<div>
			<Box style={{ gridArea: 'welcomeArea' }}>
				welcome 1
			</Box>
			<Box style={{ gridArea: 'welcomeArea' }}>
				welcome 2
			</Box>
		</div>
		<div>
			<Box style={{ gridArea: 'communityArea' }}>
				community 1
			</Box>
			<Box style={{ gridArea: 'communityArea' }}>
				community 2
			</Box>
		</div>
	</GridBox>
  )
}
