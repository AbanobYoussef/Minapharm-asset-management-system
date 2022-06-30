using AutoMapper;
using DTOs;
using Entities.Entities;
using Repositories.IGenericRepository;
using Services.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public class DeviceAssetService : IGenericService<DeviceAssetDTO>
    {
        private readonly IUnitOfWork<DeviceAsset> _deviceAsset;

        private IMapper _mapper;
        public DeviceAssetService(IUnitOfWork<DeviceAsset> deviceAsset, IMapper mapper)
        {
            _deviceAsset = deviceAsset;
            _mapper = mapper;
        }
        public DeviceAssetDTO Delete(object id)
        {
            return _mapper.Map<DeviceAssetDTO>(_deviceAsset.Entity.Delete(id));
        }

        public IEnumerable<DeviceAssetDTO> GetALL()
        {
            var list = _deviceAsset.Entity.GetALL();
            return _mapper.Map<IEnumerable<DeviceAssetDTO>>(list);
        }

        public DeviceAssetDTO GetById(object id)
        {
            return _mapper.Map<DeviceAssetDTO>(_deviceAsset.Entity.GetById(id));
        }

        public DeviceAssetDTO Insert(DeviceAssetDTO entity)
        {
            var newemp = _mapper.Map<DeviceAsset>(entity);
            var newempDTO = _deviceAsset.Entity.Insert(newemp);
            return _mapper.Map<DeviceAssetDTO>(newempDTO);
        }

        public DeviceAssetDTO Update(DeviceAssetDTO entity)
        {
            var newemp = _mapper.Map<DeviceAsset>(entity);
            var newempDTO = _deviceAsset.Entity.Update(newemp);
            return _mapper.Map<DeviceAssetDTO>(newempDTO);
        }
    }
    
    
}
