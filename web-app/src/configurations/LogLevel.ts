import * as log from 'loglevel'

  /**
   * 5 silenzia tutto
   * 4 visibile error
   * 3 warning
   * 2 info
   * 1 debug
   * 0 trace
   */

if (process.env.REACT_APP_ENV === 'development')
    log.setLevel(0)
else if (process.env.REACT_APP_ENV === 'quality')
    log.setLevel(2)
else
    log.setLevel(4)

export default log