![Stackspace Logo](./stackspace.png)

# Stackspace

Welcome to **Stackspace** – The dynamic database solution for modern applications. Stackspace is a powerful CLI tool designed to simplify and automate the management of cloud stacks, databases, and applications. It allows you to create and configure cloud environments with ease, manage different database modes, and integrate cloud services seamlessly.

## Features

- **Cloud Integration**: Supports multiple cloud providers (AWS, Google Cloud Platform, Microsoft Azure) for deployment and management.
- **Database Modes**: Offers flexible database configuration options including Relational (PostgreSQL, MySQL), Non-Relational (MongoDB, DynamoDB), and Hybrid models.
- **Project Management**: Create and manage multiple stackspace projects using simple CLI commands.
- **Automated Configuration**: Automates the setup process with predefined configuration options for quick and error-free deployment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Commands](#commands)
  - [Help](#help)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To use Stackspace, ensure that you have **Node.js** and **npm** installed. If not, download and install Node.js from [here](https://nodejs.org/).

### Steps to install Stackspace

1. Clone the repository:
   ```bash
   git clone https://github.com/hyphen-ani/stackspace-cli.git

2. Navigate to the project folder:
   ```bash
   cd stackspace-cli

3. Install the required dependencies:
   ```bash
   npm install

4. Link the package globally to use it from the command line:
   ```bash
   npm link
   
Now, you can use Stackspace commands globally.

## Usage
Stackspace offers several commands to help manage your projects. Below is a list of available commands and their usage:

## Commands

#### `stackspace create`
This command is used to create a new Stackspace project.

### Usage:
```bash
stackspace create
```

#### Description:
- Prompts the user to define the name of the stack, the cloud provider, and the database mode.
- Allows you to enter necessary configuration details like cloud credentials and database settings.
- Saves the configuration in a stackspace_config.json file.

#### `stackspace list-stacks`
This command lists all the Stackspace projects that have been created.

### Usage:
```bash
stackspace list-stacks
```
#### Description:
- Displays all stackspace projects available in the current environment.
  

#### `stackspace --help`
Use this to display help for the general Stackspace command.

### Usage:
```bash
stackspace --help
```
#### Description:
- Shows the help menu for Stackspace, including all available commands.



#### `stackspace <command> --help`
Use this to get help on a specific command.

### Usage:
```bash
stackspace create --help
```
#### Description:
- Shows the help menu for a specific command such as `create`


### Configuration
Stackspace stores configuration for each stack in a file named stackspace_config.json. This file contains all the details about the stack, including:

- Stack name
- Cloud provider and credentials
- Database mode and configurations
- The configuration file is automatically created and updated during the setup process, and it helps you manage multiple stacks easily.

### Example Configuration File
bash
```
{
  "mystackspace_app": {
    "stackName": "mystackspace_app",
    "cloudProvider": "AWS",
    "cloudConfig": {
      "awsAccessKey": "your-access-key",
      "awsSecretKey": "your-secret-key",
      "region": "us-east-1"
    },
    "databaseMode": "Relational (PostgreSQL, MySQL)",
    "createdAt": "2024-12-08T12:34:56Z"
  }
}
```

## Contributing

We welcome contributions to Stackspace! If you'd like to help improve the project, follow these steps:

1. Fork the repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/stackspace.git
   
3. Create a new branch for your changes:
   ```bash
   git checkout -b your-branch-name

4. Make your changes and commit them:
   ```bash
   git commit -m "Description of your changes"

5. Push to your fork:
   ```bash
   git push origin your-branch-name

6. Create a pull request from your branch to the main repository.


### Code of Conduct
By participating in this project, you agree to follow the Code of Conduct.

### License
Stackspace is licensed under the MIT License.

### Contact
For any questions or inquiries, feel free to reach out:

GitHub Issues: https://github.com/hyphen-ani/stackspace-cli/issues

**Regards,
Stackspace Team**
