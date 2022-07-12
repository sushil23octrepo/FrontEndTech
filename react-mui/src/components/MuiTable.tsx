import { TableContainer,Table,TableHead,TableBody,TableRow, TableCell,Paper } from "@mui/material"

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:"300px"}}>
    <Table aria-aria-label="simple table" stickyHeader >
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell align="center">Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
              data.map(item=>(
                <TableRow key={item.id}
                sx={{"&:last-child td &:last-child th":{border:0}}}
                >
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                </TableRow>
              ))  
            }
        </TableBody>
    </Table>
    </TableContainer>
  )
}

let data=[{"id":1,"first_name":"Danica","last_name":"Grimsley","email":"dgrimsley0@skyrock.com","gender":"Female","ip_address":"241.138.170.64"},
{"id":2,"first_name":"Sebastian","last_name":"Freckleton","email":"sfreckleton1@huffingtonpost.com","gender":"Male","ip_address":"106.73.145.134"},
{"id":3,"first_name":"Ian","last_name":"Fierro","email":"ifierro2@cbslocal.com","gender":"Male","ip_address":"183.88.148.221"},
{"id":4,"first_name":"Milissent","last_name":"Butfield","email":"mbutfield3@yellowpages.com","gender":"Female","ip_address":"216.10.92.221"},
{"id":5,"first_name":"Sandra","last_name":"O'Concannon","email":"soconcannon4@domainmarket.com","gender":"Female","ip_address":"78.91.196.116"},
{"id":6,"first_name":"Ross","last_name":"Vowels","email":"rvowels5@hugedomains.com","gender":"Male","ip_address":"33.74.146.236"},
{"id":7,"first_name":"Shurlocke","last_name":"Liptrod","email":"sliptrod6@ovh.net","gender":"Male","ip_address":"101.55.124.167"},
{"id":8,"first_name":"Olga","last_name":"Mirfin","email":"omirfin7@wordpress.org","gender":"Female","ip_address":"39.3.57.170"},
{"id":9,"first_name":"Gerhardine","last_name":"Shepstone","email":"gshepstone8@cdc.gov","gender":"Female","ip_address":"164.27.21.227"},
{"id":10,"first_name":"Julee","last_name":"Goodey","email":"jgoodey9@1688.com","gender":"Genderfluid","ip_address":"213.86.81.219"}];
