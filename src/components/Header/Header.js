import './Header.scss'
import { Box, Container, HStack, ListItem, Text, UnorderedList, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { ChevronDownIcon  }  from '@chakra-ui/icons'

const Header = () => {
    return (
        <div className="header">
            <Container>
                <HStack justifyContent={'space-between'}>

                    {/* logo  */}
                    <Box>
                        <Text as={'h1'}>Logo</Text>
                    </Box>

                    {/* menu  */}
                    <Box>
                        <UnorderedList listStyleType={'none'}>
                            <HStack>

                                {/* Nav Link  */}
                                <ListItem><NavLink exact activeClassName='active' to="/">Download</NavLink></ListItem>
                                <ListItem><NavLink exact activeClassName='active' to="/link">Link</NavLink></ListItem>

                                 {/* user type  */}
                                <Menu ml={6}>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Visitor</MenuButton>
                                    <MenuList>
                                        <MenuItem>Visitor</MenuItem>
                                        <MenuItem>Admin</MenuItem>
                                    </MenuList>
                                </Menu>
                            </HStack>
                        </UnorderedList>
                    </Box>
                </HStack>
            </Container>
        </div>
    )
}

export default Header