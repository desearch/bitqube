# Installation Guide for BitQUBE

This guide will walk you through installing, configuring, and running BitQUBE on your system.

## Step 1: Download and Run the Installation Script

Run the following command to download and execute the installation script:

```bash
wget https://github.com/bitqube/bitqube/releases/download/v1.0/installQUBE.sh && chmod +x installQUBE.sh && bash installQUBE.sh
```

The script will prompt you to enter a username. Provide a sudoer username that will be used for configuring BitQUBE.

### Script Details
The script performs the following:
1. Downloads the Geth binary for BitQUBE.
2. Configures the binary and sets up necessary directories.
3. Installs dependencies (zip, unzip).
4. Downloads the blockchain data, genesis file, and configuration file.
5. Configures a systemd service to run BitQUBE.

## Step 2: Generate a Validator Address

Run the following command to create a validator account:

```bash
geth --datadir "/data/bitqube/" account new
```

- You will be prompted to set a password. Use a password you can remember or store it securely.
- After entering the password twice, a BitQUBE address will be generated.

## Step 3: Create a Password File

Store your password in a secure file:

```bash
echo "YOUR_PASSWORD" > /etc/bitqube/password.txt
```

Replace `YOUR_PASSWORD` with the password you set in the previous step.

## Step 4: Edit the Configuration File

Open the configuration file using:

```bash
nano /etc/bitqube/config.toml
```

Locate the following line and replace the address with the BitQUBE address you generated:

```toml
Etherbase = "0x000000000000000000000000000000000000dEaD"
```

Save and close the file.

## Step 5: Edit the Systemd Service File

Modify the service file to include your BitQUBE address and enable mining:

```bash
sudo nano /etc/systemd/system/bitqube.service
```

Append the following flags to the `ExecStart` directive:

```bash
--unlock 0x000000000000000000000000000000000000dEaD --password "/etc/bitqube/password.txt" --mine
```

Replace `0x000000000000000000000000000000000000dEaD` with your BitQUBE address.

Reload and restart the service:

```bash
sudo systemctl daemon-reload
sudo systemctl restart bitqube
```

## Step 6: Share Your Validator Address

Share your validator address with existing validators for approval.

## Step 7: Check Approval in the Signer List

Use the following command to verify if your address has been approved:

```bash
geth --datadir "/data/bitqube/" attach
clique.getSigners()
```

## For Existing Validators

### Step 1: Access the Geth Console

Run the following command to access the Geth console:

```bash
geth --datadir "/data/bitqube/" attach
```

### Step 2: Approve a New Validator

Use the following command to approve a new validator:

```bash
clique.propose("0x000000000000000000000000000000000000dEaD", true)
```

- Replace `0x000000000000000000000000000000000000dEaD` with the new validator’s address.
- Note that 60% of existing validators need to vote in favor for approval.

### Step 3: Optional - Remove a Validator

To remove a validator, use the following command:

```bash
clique.propose("0x000000000000000000000000000000000000dEaD", false)
```

- Replace `0x000000000000000000000000000000000000dEaD` with the validator’s address.
- Note that 60% of existing validators need to vote in favor for removal.

---

By following these steps, you can successfully install and configure BitQUBE on your system.

