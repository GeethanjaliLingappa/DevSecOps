name: Node.JS Installation

on: push

jobs:
  node-configuration:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-node@v2
        with:
          node-version: "12"
      - name: Verify Weather Node is Installed or Not
        run: node --version
 
  python-configuration:
    runs-on: ubuntu-latest
    steps:
      - name: Configure Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.6'
      
      - name: Verify the Version and Install Pre-requisites
        run: |
          pip3 install --upgrade virtualenv
