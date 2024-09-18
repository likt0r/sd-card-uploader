import { Drive } from 'drivelist'

export default class Utils {
  static getCurrentLocale(): string {
    return navigator?.language?.split('-')[0] || 'en'
  }

  static async openExternal(url: string): Promise<void> {
    await window.mainApi.send('msgOpenExternalLink', url)
  }

  static async openFile(type: string): Promise<any> {
    return window.mainApi.invoke('msgOpenFile', type)
  }
  
  static async getDriveList(): Promise<Drive[]> {
    return window.mainApi.invoke('getDriveList')
  }
}

export const { getCurrentLocale, openExternal, openFile, getDriveList } = Utils
