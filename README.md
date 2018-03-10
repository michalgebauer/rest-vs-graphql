# rest-vs-graphql
Demo application showing comparison of GraphQL and Rest web services

## Install & Run

1. Clone repository
2. Start Spring boot server
3. Start node client

## Model

<table>
  <tr>
    <th colspan="2">Inventor</th>
  </tr>
  <tr>
    <td>id</td>
    <td>Long</td>
  </tr>
  <tr>
    <td>firstname</td>
    <td>String</td>
  </tr>
  <tr>
    <td>lastname</td>
    <td>String</td>
  </tr>
  <tr>
    <td>nationality</td>
    <td>String</td>
  </tr>
  <tr>
    <td>born</td>
    <td>Integer</td>
  </tr>
  <tr>
    <td>died</td>
    <td>Integer</td>
  </tr>
  <tr>
    <td>Patents</td>
    <td>[Patent]</td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="2">Patent</th>
  </tr>
  <tr>
    <td>id</td>
    <td>Long</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
  </tr>
  <tr>
    <td>year</td>
    <td>String</td>
  </tr>
  <tr>
    <td>description</td>
    <td>String</td>
  </tr>
</table>
