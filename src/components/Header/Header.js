import './Header.scss'
import { Box, Container, HStack, ListItem, Text, UnorderedList, Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { ContextProvider } from '../../context/Context'
import { USERTYPE } from '../../context/actions'


const Header = () => {

    const { state, dispatch } = useContext(ContextProvider);
    const { userType } = state

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


                            </HStack>
                        </UnorderedList>
                    </Box>
                    {/* user type  */}
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} textTransform="capitalize"> {userType} </MenuButton>

                        <MenuList>

                            <MenuItem

                                textTransform={'capitalize'}
                                onClick={(e) => dispatch({ type: USERTYPE, payload: e.target.textContent })}>
                                visitor
                            </MenuItem>

                            <MenuItem
                                textTransform={'capitalize'}
                                onClick={(e) => dispatch({ type: USERTYPE, payload: e.target.textContent })}>
                                admin
                            </MenuItem>

                        </MenuList>
                    </Menu>
                    <Box>

                    </Box>
                </HStack>
            </Container>
        </div>
    )
}

export default Header