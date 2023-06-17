import {
    Box,
    Flex,
    Text,
    
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link as link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import "./Navbar.css"
  import {Link} from "react-scroll";
  
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    DownloadIcon
  } from '@chakra-ui/icons';
  import Prabal_Kumar_Dwivedi_Resume from "./Prabal_Kumar_Dwivedi_Resume.pdf"
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  const a="<";
  const b=">"

    return (
      <Box   position="fixed"
      left="0"
      right="0"
      zIndex="100"
      top="0"
     >
        <Flex
      
        bg="teal.500"
       
          minH={{base:"20px",sm:"30px", md:"60px"}}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}  >
          <Flex
      
            flex={{ base: 1, md: 'center' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center',sm:"center" ,md: 'start' }} ml={{md:"10"}}>
            <Text 
              textAlign={useBreakpointValue({ base: 'right',sm:"right" , md: 'left' })}
              fontFamily={'heading'}
            
            fontSize={{base:"xl",sm:"xl",md:"3xl"}} as="b"  >
         {a} Prabal /{b}
            </Text>
            </Flex>
            <Flex display={{ base: 'none', md: 'flex' }} >
              <DesktopNav />
            </Flex>
        
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
     <Button display={{base:"none",sm:"none",md:"flex"}} onClick={()=>{
      window.open("https://drive.google.com/file/d/1sOuLaYTpfP3_UilxVwOefrEYYAZaeql_/view?usp=drive_link","_blank")
     }}
              as={'a'}
            bg="transparent"
           _hover="none"
              fontSize={'lg'}
           href={Prabal_Kumar_Dwivedi_Resume}
              download={"Prabal_Kumar_Dwivedi_Resume"}
              fontWeight={700}
              
              >
        <DownloadIcon mx="2"/>      Resume
            </Button> 
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'}  spacing={{md:15,lg:20}} mr={{md:"20", lg:"50"}}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link to={navItem.label}
                 spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                 activeClass='highlighted'
                 
                style={{fontWeight:"700", fontSize:"1.25rem",padding:"6px"}}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'right'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
   
        p={4}
w="40%"
h="40vh"
bg="black"
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
   // console.log(label)
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
      
          py={2}
          // as={link}
        bg="black"
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Link to={label}
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Link>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
    
            top="10"
            height="120"
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
       
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
 
  
  const NAV_ITEMS= [
    {
      label: 'Home',
    },
    {
      label: 'About',
    
    },
    {
      label: 'Skills',
      href: '#',
    },
    {
      label: 'Projects',
      href: '#',
    },
    {
        label: 'Contact',
        href: '#',
      },
  ];