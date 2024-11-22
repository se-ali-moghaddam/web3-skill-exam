# web3-skill-exam

---

### Blockchain Backend Skill Test

This repository showcases solutions to several skill-based challenges focused on blockchain backend development. The challenges highlight my expertise in working with web3.js, Express.js, MongoDB, and blockchain APIs, emphasizing efficient integration of blockchain technology into web applications. Below are the implemented challenges:

### Implemented Features

1. **NFT Metadata Retrieval and Storage**  
   **Description:** Developed an API endpoint that retrieves metadata for a specified NFT using the contract address and token ID. The metadata, including name, description, and image URL, is fetched from the blockchain, stored in MongoDB, and returned to users via a clean JSON response.  
   **Focus Areas:**  
   - Interaction with blockchain smart contracts via web3.js.  
   - Efficient data handling and persistence in MongoDB.  
   - Robust API endpoint design with error handling.  

2. **Simple Cryptocurrency Transaction Tracking**  
   **Description:** Built an API endpoint that retrieves the last five transactions for a given cryptocurrency address using a blockchain explorer API (e.g., Etherscan). Transactions are stored in MongoDB, and users can query them by address and date range.  
   **Focus Areas:**  
   - Integration with external blockchain explorer APIs.  
   - Efficient storage and retrieval of transaction data in MongoDB.  
   - Flexible API design with support for querying by address and date.  

3. **Token Balance Lookup**  
   **Description:** Created an API endpoint to check the token balance of a specified wallet address for a given ERC20 token contract. The balance is retrieved directly from the blockchain and returned as a user-friendly JSON response.  
   **Focus Areas:**  
   - Smart contract interaction to query token balances.  
   - Use of web3.js for real-time blockchain data retrieval.  
   - Clear and secure API response handling.  

4. **Basic Smart Contract Interaction**  
   **Description:** Built an API endpoint for transferring ERC20 tokens between wallets using a smart contract deployed on a testnet. Each transaction is logged in MongoDB, ensuring traceability and data integrity.  
   **Focus Areas:**  
   - Token transfer via web3.js with secure private key management.  
   - Integration of transaction data with MongoDB for historical tracking.  
   - Ensuring transactional safety and robust error handling.  

### Technologies Used  

- **Backend Framework:** Express.js  
- **Blockchain Interaction:** web3.js, ethers.js  
- **Database:** MongoDB  
- **Other:** dotenv, Axios, Node.js  

---

This repository demonstrates my ability to integrate blockchain technology into scalable backend solutions, leveraging best practices for security, performance, and usability.