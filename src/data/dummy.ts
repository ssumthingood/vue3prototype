interface Calculate {
  name: string;
}

interface Contract {
  name: string;
  calculate: Calculate[];
}

interface Channel {
  name: string;
  contracts: Contract[];
}

interface Content {
  name: string;
  channels: Channel[];
}

interface TargetIp {
  name: string;
  contents: Content[];
}

const dummyData: TargetIp = {
  name: 'Target IP',
  contents: [
    {
      name: 'Content 1',
      channels: [
        {
          name: 'Channel 1',
          contracts: [
            {
              name: 'Contract 1',
              calculate: [
                { name: 'Calculate 1' },
                { name: 'Calculate 2' },
              ],
            },
            {
              name: 'Contract 2',
              calculate: [
                { name: 'Calculate 3' },
                { name: 'Calculate 4' },
              ],
            },
          ],
        },
        {
          name: 'Channel 2',
          contracts: [
            {
              name: 'Contract 3',
              calculate: [
                { name: 'Calculate 5' },
                { name: 'Calculate 6' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default dummyData;

// 예시 데이터로 내용을 채워넣을 수 있습니다.
