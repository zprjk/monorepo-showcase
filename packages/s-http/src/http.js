import got from 'got';

// #region Public
class Http {
  /**
   * @param {string} baseUrl
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * @param {{url: string, body: object}} options
   * @return {Promise}
   */
  post({url, body}) {
    return got.post(url, {
      baseUrl: this.baseUrl,
      json: body,
      responseType: 'json',
    });
  }

  /**
   * @param {{url: string}} options
   * @return {Promise}
   */
  get({url}) {
    return got.get(url, {baseUrl: this.baseUrl});
  }

  /**
   * @param {{url: string, body: object}} options
   * @return {Promise}
   */
  put({url, body}) {
    return got.put(url, {
      baseUrl: this.baseUrl,
      json: body,
      responseType: 'json',
    });
  }
}

export default Http;
// #endregion
