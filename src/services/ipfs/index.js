import ipfsAPI from 'ipfs-api';
import streamToArray from 'stream-to-array';

const ipfs = ipfsAPI({ host: 'ipfs.infura.io', protocol: 'https' });

const getFileBuffer = stream => new Promise((resolve, reject) => {
  let index = 0;
  const bufferObject = {};
  const paths = [];
  stream.on('data', (dataChunk) => {
    const replace = `${paths[0]}/`;
    paths.push(dataChunk.path.replace(replace, ''));
    if (stream !== undefined) {
      streamToArray(dataChunk.content, (err, buffer) => {
        if (err) { reject(err); }
        if (buffer[0] !== undefined) {
          index += 1;
          bufferObject[paths[index]] = buffer[0];
          resolve(bufferObject);
        }
      });
    }
  });
  stream.on('error', (error) => {
    reject(error);
  });
});

export const getFileFromIPFS = filehash => new Promise((resolve, reject) => {
  ipfs.files.get(filehash)
    .then((stream) => {
      getFileBuffer(stream)
        .then((fileBuffer) => {
          resolve(fileBuffer);
        });
    })
    .catch((error) => {
      console.log('Unable to get the file from IPFS');
      reject(error);
    });
});

export const sendFilesToIPFS = files => new Promise((resolve, reject) => (
  ipfs.add(files, (error, hash) => (
    error ? reject(error) : resolve(hash)
  ),
)));
