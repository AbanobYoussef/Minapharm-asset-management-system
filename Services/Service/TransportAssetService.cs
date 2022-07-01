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
    public class TransportAssetService : IGenericService<TransportAssetDTO>
    {
        private readonly IUnitOfWork<TransportAsset> _transportAsset;

        private IMapper _mapper;
        public TransportAssetService(IUnitOfWork<TransportAsset> transportAsset, IMapper mapper)
        {
            _transportAsset = transportAsset;
            _mapper = mapper;
        }
        public ResultModel<TransportAssetDTO> Delete(object id)
        {
            var reopResult = _transportAsset.Entity.Delete(id);
            var DTO = _mapper.Map<TransportAssetDTO>(reopResult.Result);


            ResultModel<TransportAssetDTO> result = new ResultModel<TransportAssetDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };
            return result;
        }

        public ResultModel<TransportAssetDTO> GetALL()
        {

            var reopResult = _transportAsset.Entity.GetALL();
            var DTO = _mapper.Map<IEnumerable<TransportAssetDTO>>(reopResult.ResultList);


            ResultModel<TransportAssetDTO> result = new ResultModel<TransportAssetDTO>()
            {
                Message = reopResult.Message,
                Result = null,
                ResultList = DTO
            };
            return result;
        }

        public ResultModel<TransportAssetDTO> GetById(object id)
        {
            var reopResult = _transportAsset.Entity.GetById(id);
            var DTO = _mapper.Map<TransportAssetDTO>(reopResult.Result);


            ResultModel<TransportAssetDTO> result = new ResultModel<TransportAssetDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };
            return result;
        }

        public ResultModel<TransportAssetDTO> Insert(TransportAssetDTO entity)
        {

            entity.Id = Guid.NewGuid();
            var newemp = _mapper.Map<TransportAsset>(entity);

            var reopResult = _transportAsset.Entity.Insert(newemp);
            var DTO = _mapper.Map<TransportAssetDTO>(reopResult.Result);


            ResultModel<TransportAssetDTO> result = new ResultModel<TransportAssetDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };
            return result;
        }

        public ResultModel<TransportAssetDTO> Update(TransportAssetDTO entity)
        {
            var newemp = _mapper.Map<TransportAsset>(entity);

            var reopResult = _transportAsset.Entity.Update(newemp);
            var DTO = _mapper.Map<TransportAssetDTO>(reopResult.Result);


            ResultModel<TransportAssetDTO> result = new ResultModel<TransportAssetDTO>()
            {
                Message = reopResult.Message,
                Result = DTO,
                ResultList = null
            };
            return result;
        }
    }
    }

