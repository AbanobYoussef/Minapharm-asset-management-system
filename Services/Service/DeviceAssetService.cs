using AutoMapper;
using DTOs;
using Entities.Entities;
using Entities.Hrlpers;
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
        public async Task<ResultModel<DeviceAssetDTO>> Delete(object id)
        {
            var reopResult = _deviceAsset.Entity.Delete(id);
            await _deviceAsset.Save();
            var DTO= _mapper.Map<DeviceAssetDTO>(reopResult.Result);


            ResultModel<DeviceAssetDTO> result = new ResultModel<DeviceAssetDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };
            return result;
        }

        public ResultModel<DeviceAssetDTO> GetALL()
        {
            var reopResult = _deviceAsset.Entity.GetALL();

            var DTOList = _mapper.Map<List<DeviceAssetDTO>>(reopResult.ResultList);


            ResultModel<DeviceAssetDTO> result = new ResultModel<DeviceAssetDTO>()
            {
                Message = reopResult.Message,
                Result = null,
                ResultList = DTOList
            };

            return result;
        }

        public ResultModel<DeviceAssetDTO> GetById(object id)
        {
            var reopResult = _deviceAsset.Entity.GetById(id) ;

            var DTO  = _mapper.Map<DeviceAssetDTO>(reopResult.Result);

            ResultModel<DeviceAssetDTO> result = new ResultModel<DeviceAssetDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };

            return result;
        }

        public async Task<ResultModel<DeviceAssetDTO>> Insert(DeviceAssetDTO entity)
        {
            entity.Id = Guid.NewGuid();
            var newemp = _mapper.Map<DeviceAsset>(entity);
            var reopResult = _deviceAsset.Entity.Insert(newemp);
            await _deviceAsset.Save();

            await _deviceAsset.Save();
            var DTO = _mapper.Map<DeviceAssetDTO>(reopResult.Result);

            ResultModel<DeviceAssetDTO> result = new ResultModel<DeviceAssetDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };

            return result;
        }

        public async Task<ResultModel<DeviceAssetDTO>> Update(DeviceAssetDTO entity)
        {
            var newemp = _mapper.Map<DeviceAsset>(entity);
            var reopResult = _deviceAsset.Entity.Update(newemp);

            await _deviceAsset.Save();
            var DTO = _mapper.Map<DeviceAssetDTO>(reopResult.Result);

            ResultModel<DeviceAssetDTO> result = new ResultModel<DeviceAssetDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };

            return result;
        }
    }
    
    
}
