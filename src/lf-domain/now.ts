export type NowType = {
  datetime: string
  message?: string
  stage: {
    tokugawa?: {
      name: string
      start: string
      end: string
      status: string | null
      current: string | null
      next: string | null
    }
    toyotomi?: {
      name: string
      start: string
      end: string
      status: string | null
      current: string | null
      next: string | null
    }
    sengoku?: {
      name: string
      start: string
      end: string
      status: string | null
      current: string | null
      next: string | null
    }
    momokubari?: {
      name: string
      start: string
      end: string
      status: string | null
      current: string | null
      next: string | null
    }
    gekokujyo?: {
      name: string
      start: string
      end: string
      status: string | null
      current: string | null
      next: string | null
    }
  }
  wc: { name: string; men: string; lady: string }[]
}

export type NowResponseType = Omit<NowType, 'stage'> & {
  stage: {
    name: string
    start: string
    end: string
    status: string | null
    current: string | null
    next: string | null
  }[]
}
